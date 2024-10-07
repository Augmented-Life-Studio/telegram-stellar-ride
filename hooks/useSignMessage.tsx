import { useState } from 'react'
import { useWeb3 } from '../context/Web3ProviderContext'

export interface SignMessage {
  (account: string, message: string): Promise<string | null>
}

/**
 * This hook provides functionality to sign messages using a Web3 provider.
 * It handles the following functionalities:
 * - Retrieves the Web3 provider context.
 * - Manages the signing state and any errors that occur during the signing process.
 * - Provides a function to sign messages with the connected account.
 *
 * @hook
 * @returns {object} An object containing the signMessage function, signing state, signature, and any signature errors.
 *
 * @example
 * const { signMessage, isSigning, signature, signatureError } = useSignMessage();
 *
 * @remarks
 * This hook uses the following hooks and context providers:
 * - `useWeb3` for accessing the Web3 provider context.
 * - `useState` for managing the signing state, signature, and any errors.
 *
 * The hook provides a `signMessage` function that can be used to sign messages with the connected account.
 * It also manages the state of the signing process and any errors that may occur.
 */
export const useSignMessage = () => {
  const { provider } = useWeb3()
  const [isSigning, setIsSigning] = useState(false)
  const [signature, setSignature] = useState<string | null>(null)
  const [signatureError, setSignatureError] = useState<string | null>(null)

  const signMessage = async (account: string, message: string) => {
    if (!provider || !account) {
      setSignatureError('No provider or account connected')
      return null
    }

    setIsSigning(true)
    setSignatureError(null)

    try {
      const signer = provider.getSigner()
      const signature = await signer.signMessage(message)
      setSignature(signature)
      setIsSigning(false)
      return signature
    } catch (err) {
      setSignatureError('Error signing message')
      console.error('Error signing message:', err)
      setIsSigning(false)
      return null
    }
  }

  return { signMessage, isSigning, signature, signatureError }
}
