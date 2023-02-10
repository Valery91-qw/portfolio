import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@/utils/createEmotionCache';
import { EmotionCache } from '@emotion/cache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache();
export default function App(prop: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = prop;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </CacheProvider>
  );
}
