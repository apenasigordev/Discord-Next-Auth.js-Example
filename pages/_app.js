// pages/_app.js
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import '../styles/Home.module.css';
import '../styles/Nav.module.css';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}