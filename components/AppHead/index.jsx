import React from 'react';
import Head from 'next/head';

import favicon from '../../images/favicon.png';
import photo from '../../images/pedro-menezes.jpg';

const AppHead = () => (
  <Head>
    <title>Pedro Menezes</title>
    <meta charSet="utf-8" />
    <meta
      content="width=device-width, initial-scale=1, viewport-fit=cover"
      name="viewport"
    />
    <meta
      content="Pedro Menezes"
      property="og:title"
    />
    <meta
      content=""
      property="og:description"
    />
    <meta
      content="website"
      property="og:type"
    />
    <meta
      content="https://pedromenezes.dev"
      property="og:url"
    />
    <meta
      content={photo}
      property="og:image"
    />
    <link
      href={favicon}
      rel="icon"
    />
  </Head>
);

export default AppHead;
