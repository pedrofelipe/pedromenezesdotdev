import Head from 'next/head'

import App from '../components';

function Main () {
  return (
    <>
      <Head>
        <title>Pedro Menezes</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta property="og:title" content="Pedro Menezes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://pedromenezes.dev" />
      </Head>
      <App />
    </>
  )
}

export default Main;
