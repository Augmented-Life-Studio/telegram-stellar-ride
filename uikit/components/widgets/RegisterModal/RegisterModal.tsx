import * as React from 'react'
import { useTranslation } from 'next-i18next'
import { Flex } from '../../Flex'
import { Text, TextVariant } from '../../Text'
import styled from 'styled-components'
import { Button } from '../../Button'

const MainWrapper = styled(Flex)`
  width: 100%;
  z-index: 1;
  margin: 0px;
  overflow: hidden;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  height: 100%;
`

const StyledText = styled(Text)`
  z-index: 1;
`

interface RegisterModalProps {
  onClose?: () => void
  handleRegister: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, handleRegister }) => {
  const { t } = useTranslation()

  const handleButtonClick = async () => {
    await handleRegister()
  }

  return (
    <MainWrapper>
      <Flex flexDirection="column" alignItems="center">
        <Text variant={TextVariant.BODY_BIG_BOLD}>{t('challenge.modalTitle')}</Text>
        <Text variant={TextVariant.BODY_DEFAULT_BOLD}>{t('challenge.modalDesc')}</Text>
      </Flex>
      <Button textVariant={TextVariant.H5} onClick={handleButtonClick} buttonWidth="216px" buttonHeight="57px">
        {t('challenge.register')}
      </Button>
    </MainWrapper>
  )
}

export default RegisterModal
