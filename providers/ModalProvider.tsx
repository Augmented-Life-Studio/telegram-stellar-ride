import React, { createContext, useState, useContext } from 'react'
import Modal from '@/uikit/components/widgets/Modal/Modal'
import { ModalType } from '@/uikit/components/widgets/Modal/types'

interface ModalContextProps {
  openModal: (content: React.ReactNode, type?: ModalType) => void
  closeModal: () => void
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>
  setDismissCallback: React.Dispatch<React.SetStateAction<() => void>>
  setEnableDismissButton: React.Dispatch<React.SetStateAction<boolean>>
  setModalTitle: React.Dispatch<React.SetStateAction<React.ReactNode | string | undefined>>
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

interface ModalProviderProps {
  children: React.ReactNode
}

/**
 * This component provides a context for managing modals in the Telegram mini-app.
 * It handles the following functionalities:
 * - Opens and closes modals.
 * - Sets modal content, type, and title.
 * - Configures whether the modal can be dismissed by clicking on the overlay.
 * - Provides a callback function for when the modal is dismissed.
 * - Enables or disables the dismiss button.
 *
 * @component
 * @returns {JSX.Element} The rendered ModalProvider component.
 *
 * @example
 * <ModalProvider>
 *   <YourComponent />
 * </ModalProvider>
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useState` for managing modal state.
 * - `ModalContext.Provider` for providing modal-related functions and state to child components.
 *
 * The component conditionally renders the modal content and handles overlay click events to dismiss the modal if configured.
 */
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [enableDismissButton, setEnableDismissButton] = useState<boolean>(false)
  const [modalTitle, setModalTitle] = useState<React.ReactNode | string>()
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true)
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)
  const [type, setType] = useState<ModalType>('center')
  const [dismissCallback, setDismissCallback] = useState(() => () => null as unknown)

  const openModal = (content: React.ReactNode, type: ModalType = 'center') => {
    setModalContent(content)
    setType(type)
    setIsOpen(true)
  }

  // Dismiss modal
  const onDismiss = () => {
    setIsOpen(false)
    setModalContent(null)
    dismissCallback()
  }

  // On overlay
  const handleOverlayClose = () => {
    if (closeOnOverlayClick) {
      onDismiss()
    }
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal: onDismiss,
        setCloseOnOverlayClick,
        setDismissCallback,
        setEnableDismissButton,
        setModalTitle
      }}
    >
      {children}
      <Modal {...{ isOpen, type, handleOverlayClose, enableDismissButton, modalTitle, onDismiss }}>
        {React.isValidElement(modalContent) &&
          React.cloneElement(modalContent, {
            // @ts-ignore
            onClose: onDismiss
          })}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}
