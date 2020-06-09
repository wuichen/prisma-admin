import Head from 'next/head';
// import { AppProps } from 'next/app';
import { withApollo } from 'Api/client';
import { NextPage } from 'next';
import Layout from 'Layouts/Admin';

import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import App from 'next/app';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';
import { HeaderProvider } from 'contexts/header/header.provider';
import { LanguageProvider } from 'contexts/language/language.provider';

import { useDeviceType } from 'helper/useDeviceType';
import { CartProvider } from 'contexts/cart/use-cart';
// Language translation files
import localEn from 'data/translation/en.json';
import localAr from 'data/translation/ar.json';
import localEs from 'data/translation/es.json';
import localDe from 'data/translation/de.json';
import localCn from 'data/translation/zh.json';
import localIl from 'data/translation/he.json';

// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/MultiCarousel/MultiCarousel.style.css';
import '@redq/reuse-modal/lib/index.css';
import { parseCookies } from 'helper/parse-cookies';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import AppLayout from 'containers/LayoutContainer/AppLayout';
import { GlobalStyle } from 'styled/global.style';

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
// need to provide types
const ExtendedApp: NextPage<any> = ({ Component, pageProps, userAgent, locale, query, pathname, domain }) => {
  const deviceType = useDeviceType(userAgent);
  const ConditionalLayout = ({ children }) => {
    if (pathname && pathname.includes('/admin')) {
      return <Layout>{children}</Layout>;
    }

    return (
      <ThemeProvider theme={theme}>
        <AppLayout deviceType={deviceType}>{children}</AppLayout>
        <GlobalStyle />
      </ThemeProvider>
    );
  };
  return (
    <>
      <Head>
        <title>Prisma Admin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <SearchProvider query={query}>
            <HeaderProvider>
              <StickyProvider>
                <AuthProvider>
                  <ConditionalLayout>
                    <Component {...pageProps} deviceType={deviceType} />
                  </ConditionalLayout>
                </AuthProvider>
              </StickyProvider>
            </HeaderProvider>
          </SearchProvider>
        </CartProvider>
      </LanguageProvider>
    </>
  );
};

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query, pathname } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { locale } = parseCookies(req);
  const domain = getSubdomain(req);
  return { ...appProps, userAgent, query, locale, pathname, domain };
};

export default withApollo(ExtendedApp);

export function getSubdomain(req: any) {
  let host;
  let sub;
  if (req && req.headers.host) {
    host = req.headers.host;
  }
  if (typeof window !== 'undefined') {
    host = window.location.host;
  }
  if (host) {
    sub = host.split('localhost:3000')[0];
    if (sub) {
      return sub.split('.')[0];
    }
  }
  return 'www';
}
