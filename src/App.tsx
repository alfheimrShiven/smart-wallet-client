import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@pages/Layout'
import Dashboard from '@pages/Dashboard'
import GuardianPortal from '@pages/Guardian-portal'
import Guardians from '@pages/Guardians'
import SignUp from '@pages/Sign-up'
import AccountRecovery from '@pages/Account-recovery'
import NoPage from '@pages/NoPage'
import { PrivyProvider } from '@privy-io/react-auth'
import { base, baseGoerli, mainnet, goerli, polygon, polygonMumbai } from 'viem/chains';
import { PrivyWagmiConnector } from '@privy-io/wagmi-connector';
// You can import additional chains from 'wagmi/chains'
// https://wagmi.sh/react/chains
import { configureChains } from 'wagmi';
// You may replace this with your preferred providers
// https://wagmi.sh/react/providers/configuring-chains#multiple-providers
import { publicProvider } from 'wagmi/providers/public';

// Replace the chains and providers with the ones used by your app.
// https://wagmi.sh/react/providers/configuring-chains
const configureChainsConfig = configureChains([mainnet, goerli, polygon, polygonMumbai], [publicProvider()]);

function App() {

  const handleLogin = (user: any) => {
    console.log(`User ${user.id} logged in!`)
  }

  return (
    <PrivyProvider
      appId="clpispdty00ycl80fpueukbhl"
      onSuccess={handleLogin}
      config={{
        loginMethods: ['email', 'google', 'apple', 'discord', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        embeddedWallets: {
          createOnLogin: 'all-users'
        },

        // Replace this with your desired default chain
        defaultChain: polygonMumbai,
        // Replace this with a list of your desired supported chains
        supportedChains: [base, baseGoerli, mainnet, goerli, polygon, polygonMumbai]
      }}
    >
      {/* <PrivyWagmiConnector wagmiChainsConfig={configureChainsConfig}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/guardian-portal" element={<GuardianPortal />} />
            <Route path="/guardians" element={<Guardians />} />
            <Route path="/account-recovery" element={<AccountRecovery />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </PrivyWagmiConnector> */}

    </PrivyProvider>
  )
}

export default App
