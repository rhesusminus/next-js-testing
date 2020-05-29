import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>title goes here</title>
      </Head>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
