import '@/css/tailwind.css'
import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as gtag from '../lib/gtag'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
