import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex'
import { X } from 'react-feather'
import { Motion, spring } from 'react-motion'

const Wrapper = styled(Flex)`
  position: relative;
  gap: 8px;
  cursor: pointer;
`

const CheckMark = styled(Flex)`
  position: absolute;
  padding: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface ICheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: React.ReactNode
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <Flex gap="8px" alignItems="center">
      <Wrapper onClick={() => onChange && onChange(!checked)}>
        {/* <Image alt="Checkbox" width={24} height={24} /> */}
        <Motion style={{ opacity: spring(checked ? 1 : 0) }}>
          {({ opacity }) => (
            <CheckMark style={{ opacity }}>
              <X size={16} />
            </CheckMark>
          )}
        </Motion>
      </Wrapper>
      {label && <>{label}</>}
    </Flex>
  )
}

export default Checkbox
