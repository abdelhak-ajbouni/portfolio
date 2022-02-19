import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from 'react-hot-toast';

import TopBar from "src/components/TopBar"

import 'styles/globals.css'

const queryClient = new QueryClient();

function App({
  Component,
  pageProps
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <TopBar />
        <Component {...pageProps} />
        <Toaster />
      </div>
    </QueryClientProvider>
  )
}

export default App
