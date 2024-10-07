import * as React from 'react'
import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useState } from 'react'
import { Flex } from '../../Flex'
import { Text, TextVariant } from '../../Text'
import { Input } from '../../Input'
import { useAppSelector } from '@/store/hooks'
import { useLazyCheckUserNameAvailabilityQuery, useUpdateUserMutation } from '@/store/user/user.api'
import debounce from 'lodash/debounce'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'
import { logMessage } from '@/utils/logMessage'
import { Button } from '../../Button'

const MainWrapper = styled(Flex)`
  width: 100%;
  z-index: 1;
  margin: 14px;
  overflow: hidden;
  flex-direction: column;
  gap: 34px;
  align-items: center;
  height: 100%;
`

const StyledText = styled(Text)`
  z-index: 1;
`

interface UsernameSetupModalProps {
  onClose?: () => void
}

export const MIN_USERNAME_LENGTH = 2
export const MAX_USERNAME_LENGTH = 100

const UsernameSetupModal: React.FC<UsernameSetupModalProps> = ({ onClose }) => {
  const { t } = useTranslation()
  const userData = useAppSelector((state) => state.user)

  const [updateUser] = useUpdateUserMutation()
  const [checkName] = useLazyCheckUserNameAvailabilityQuery()
  const [nameAvailable, setNameAvailable] = useState(true)

  const authParams = {
    accessToken: userData.accessToken as string,
    account: userData.account,
    userId: userData.user?.userId as string
  }

  const formik = useFormik({
    enableReinitialize: true,
    validateOnBlur: false,
    initialValues: {
      // @ts-ignore
      username: userData.user.personalDetails.username || ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .nullable()
        .test('name-available', t('formCommons.nameInUse'), () => nameAvailable)
        .min(MIN_USERNAME_LENGTH, t('formCommons.minUserNameCharacters', { length: MIN_USERNAME_LENGTH }))
        .max(MAX_USERNAME_LENGTH, t('formCommons.maxUserNameCharacters', { length: MAX_USERNAME_LENGTH }))
        .matches(
          new RegExp('^([\\-\\w]+\\.?\\s?)+[\\-\\w]+\\.?$|^[-\\w]+\\.?$'),
          `${t('formCommons.allowedAlphanumericHypensAndUnderscores')}. ${t('formCommons.allowedDotsAndSpaces')}`
        )
    }),
    onSubmit: async ({ username }) => {
      try {
        const personalDetailsBody = { ...userData.user?.personalDetails }
        const payload = {
          accessToken: userData.accessToken as string,
          account: userData.account,
          userId: userData.user?.userId as string,
          personalDetails: {
            ...personalDetailsBody,
            username
          }
        }
        await updateUser(payload)
        // @ts-ignore
        onClose()
      } catch (error) {
        logMessage('error', error)
      }
    }
  })

  const handleDebounceFn = async (inputValue: string) => {
    if (inputValue.length >= 2 && userData?.user?.personalDetails?.username !== inputValue) {
      const { isAvailable } = await checkName({ userName: inputValue, ...authParams }).unwrap()
      setNameAvailable(isAvailable)
    } else {
      setNameAvailable(true)
    }
  }
  const debounceFn = useCallback(debounce(handleDebounceFn, 1000), [])

  // We need to revalidate the form once availability of the name is changed
  useEffect(() => {
    formik.validateForm()
  }, [nameAvailable])

  return (
    <MainWrapper>
      <Flex justifyContent="center" fullWidth>
        <Input
          label={t('modal.changeName')}
          name="username"
          onChange={async (event) => {
            const { value } = event.target
            formik.setFieldValue('username', value)
            setNameAvailable(true)
            await debounceFn(value)
          }}
          value={formik.values.username}
          error={(formik.touched.username && !isEmpty(formik.errors.username)) || !nameAvailable}
          errorMsg={formik.errors.username}
          onBlur={formik.handleBlur}
        />
      </Flex>
      <Button buttonWidth="217" buttonHeight="57" onClick={() => formik.submitForm()}>
        <StyledText variant={TextVariant.BUTTON} textTransform="uppercase">
          {t('modal.change')}
        </StyledText>
      </Button>
    </MainWrapper>
  )
}

export default UsernameSetupModal
