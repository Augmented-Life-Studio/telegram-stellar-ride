import React, { useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '../../Flex'
import { ModalBg } from '../../Svg'

const Backdrop = styled(Flex)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`

const ModalContainer = styled(Flex)`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 288px;
  margin: 24px 16px;
`

const ModalContent = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  justify-content: center;
  align-items: center;
`

interface ModalProps {
  isOpen: boolean
  handleOverlayClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleOverlayClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleOverlayClose()
    }
  }

  return (
    <Backdrop onClick={handleBackdropClick} isOpen={isOpen}>
      <ModalContainer ref={modalRef}>
        <ModalBg />
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Backdrop>
  )
}

export default Modal
