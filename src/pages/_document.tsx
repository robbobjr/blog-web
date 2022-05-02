import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" href="/static/favicon.png" sizes='96x96' type="image/png" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}