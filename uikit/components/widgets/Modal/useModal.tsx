import { useModalContext } from '@/providers/ModalProvider'
import { useCallback } from 'react'
import { ModalType } from './types'

const useModal = ({
  content,
  type = 'center',
  closeOnOverlayClick = true,
  dismissCallback = () => null,
  enableDismissButton = false,
  modalTitle
}: {
  content: React.ReactNode
  closeOnOverlayClick?: boolean
  type?: ModalType
  dismissCallback?: () => void
  enableDismissButton?: boolean
  modalTitle?: React.ReactNode | string
}) => {
  const { openModal, closeModal, setCloseOnOverlayClick, setDismissCallback, setEnableDismissButton, setModalTitle } =
    useModalContext()

  const handleOpenModal = useCallback(() => {
    setCloseOnOverlayClick(closeOnOverlayClick)
    setDismissCallback(() => dismissCallback)
    setEnableDismissButton(enableDismissButton)
    setModalTitle(modalTitle)
    openModal(content, type)
  }, [content, openModal, type, modalTitle, enableDismissButton])

  return [handleOpenModal, closeModal]
}

export default useModal
