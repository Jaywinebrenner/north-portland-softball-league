import '../styles/globals.scss'
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"
import { emojiCursor } from 'cursor-effects';




export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  useEffect(() => {
    new emojiCursor({ emoji: ["🥎", "🥎", "🥎"] });
  }, [])

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
