import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import UniversalProvider from '@walletconnect/universal-provider'
import { useRouter } from 'next/router'
import { AppPath } from '@/sdk/interfaces'

const isWalletConnectDisconnectedLocalStorageKey = 'isWalletConnectDisconnected'

interface Web3ContextProps {
  provider: Web3Provider | null
  account: string | null
  chainId: number | null
  qrUri: string | null
  isActive: boolean
  isActivating: boolean
  connectWalletConnect: () => Promise<{ provider: Web3Provider; account: string }>
  disconnect: () => void
  resetQrUri: () => void
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined)

/**
 * This component provides the Web3 context for the Telegram mini-app.
 * It handles the following functionalities:
 * - Manages the connection to a Web3 provider.
 * - Initializes and connects to WalletConnect.
 * - Handles account and chain ID state.
 * - Manages the QR URI for WalletConnect.
 * - Provides functions to connect and disconnect WalletConnect.
 * - Attempts to reconnect to an existing WalletConnect session.
 * - Sets up event listeners for WalletConnect session updates and disconnections.
 *
 * @component
 * @param {ReactNode} props.children - The child components to be rendered within the provider.
 * @param {string} [props.walletConnectId] - The WalletConnect project ID.
 * @returns {JSX.Element} The rendered Web3ProviderContext component.
 *
 * @example
 * <Web3ProviderContext walletConnectId="your-wallet-connect-id">
 *   <YourComponent />
 * </Web3ProviderContext>
 *
 * @remarks
 * This component uses several hooks and context providers:
 * - `useState` for managing state.
 * - `useEffect` for side effects.
 * - `useRouter` for navigation.
 * - `Web3Context` for providing Web3-related state and functions.
 *
 * The component manages the connection state to a Web3 provider and WalletConnect, and provides context values for use in child components.
 */
export const Web3ProviderContext: React.FC<{ children: ReactNode; walletConnectId?: string }> = ({
  children,
  walletConnectId
}) => {
  const [provider, setProvider] = useState<Web3Provider | null>(null)
  const [account, setAccount] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [wcProvider, setWcProvider] = useState<UniversalProvider | null>(null)
  const [qrUri, setQrUri] = useState<string | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isActivating, setIsActivating] = useState<boolean>(false)
  const { push } = useRouter()

  // Handles the connection to the Web3 provider and sets the account and chain ID
  const handleProviderConnection = async (web3Provider: Web3Provider) => {
    setProvider(web3Provider)
    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()
    const network = await web3Provider.getNetwork()
    setAccount(address)
    setChainId(network.chainId)
  }

  // Initializes the WalletConnect provider
  const initializeWalletConnect = async (): Promise<UniversalProvider | null> => {
    try {
      const wcProvider = await UniversalProvider.init({
        projectId: walletConnectId
      })

      setWcProvider(wcProvider)
      return wcProvider
    } catch (error) {
      console.error('Error initializing WalletConnect:', error)
      return null
    }
  }

  // Connects to WalletConnect and sets up the Web3 provider
  const connectWalletConnect = async (): Promise<{ provider: Web3Provider; account: string } | null> => {
    setIsActivating(true)

    try {
      const provider = await initializeWalletConnect()

      provider.on('display_uri', (uri) => setQrUri(uri))

      const chains = [
        'eip155:' + process.env.NEXT_PUBLIC_BSC_CHAIN_ID,
        'eip155:' + process.env.NEXT_PUBLIC_ETH_CHAIN_ID,
        'eip155:' + process.env.NEXT_PUBLIC_MATIC_CHAIN_ID,
        'eip155:' + process.env.NEXT_PUBLIC_ARBITRUM_CHAIN_ID,
        'eip155:' + process.env.NEXT_PUBLIC_BASE_CHAIN_ID
      ]

      await provider.connect({
        namespaces: {
          eip155: {
            methods: ['eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData'],
            chains: chains,
            events: ['chainChanged', 'accountsChanged']
          }
        }
      })

      setQrUri(null)

      const web3Provider = new Web3Provider(provider)
      await handleProviderConnection(web3Provider)

      localStorage.removeItem(isWalletConnectDisconnectedLocalStorageKey)
      setIsActive(true)
      return { provider: web3Provider, account: account as string }
    } catch (error) {
      setQrUri(null)
      setWcProvider(null)
      setIsActivating(false)
      console.error('Error connecting WalletConnect:', error)
      return null
    } finally {
      setIsActivating(false)
    }
  }

  // Disconnects from the WalletConnect provider and resets the state
  const disconnect = async () => {
    if (!isActivating) {
      setIsActivating(true)
      setProvider(null)
      setAccount(null)
      setChainId(null)
      setQrUri(null)

      if (wcProvider) {
        if (wcProvider?.session) {
          localStorage.setItem(isWalletConnectDisconnectedLocalStorageKey, 'true')
          await wcProvider?.disconnect()
        }

        setWcProvider(null)
      }

      setIsActive(false)
      setIsActivating(false)
      push(AppPath.LOGIN)
    }
  }

  // Resets the QR URI state
  const resetQrUri = () => {
    setQrUri(null)
  }

  // Attempts to reconnect to a WalletConnect session if one exists
  useEffect(() => {
    const reconnect = async () => {
      try {
        if (!wcProvider) {
          const isDisconnected = localStorage.getItem(isWalletConnectDisconnectedLocalStorageKey)

          if (isDisconnected === 'true') {
            console.log('User is marked as disconnected. Skipping reconnect.')
            return
          }

          console.log('Attempting to restore WalletConnect session...')
          const provider = await initializeWalletConnect()

          if (!provider.session) {
            console.error('No session found in provider')
            return
          }

          const web3Provider = new Web3Provider(provider)
          await handleProviderConnection(web3Provider)

          console.log('WalletConnect session successfully restored!')
        }
      } catch (error) {
        console.error('Error reconnecting WalletConnect:', error)
      }
    }

    reconnect()
  }, [wcProvider])

  // Sets up event listeners for WalletConnect session updates and disconnections
  useEffect(() => {
    if (wcProvider) {
      const handleSessionUpdate = (session) => {
        console.log('WalletConnect session updated:', session)
        const chainId = parseInt(session.namespaces.eip155.chains[0].split(':')[1], 10)
        const account = session.namespaces.eip155.accounts[0]
        setChainId(chainId)
        setAccount(account)
      }

      const handleSessionDelete = () => {
        console.warn('WalletConnect session deleted.')
        setProvider(null)
        setAccount(null)
      }

      const handleDisconnect = () => {
        console.warn('WalletConnect disconnected.')
        setProvider(null)
        setAccount(null)
      }
      wcProvider.on('session_update', handleSessionUpdate)
      wcProvider.on('session_delete', handleSessionDelete)
      wcProvider.on('disconnect', handleDisconnect)

      return () => {
        wcProvider?.removeListener('session_update', handleSessionUpdate)
        wcProvider?.removeListener('session_delete', handleSessionDelete)
        wcProvider?.removeListener('disconnect', handleDisconnect)
      }
    }
  }, [wcProvider])

  return (
    <Web3Context.Provider
      value={{
        provider,
        account,
        chainId,
        qrUri,
        isActive,
        isActivating,
        connectWalletConnect,
        disconnect,
        resetQrUri
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3ProviderContext')
  }
  return context
}
