import Document, { Html, Head, Main, NextScript } from 'next/document';

export const siteTitle = "Anze's personal website";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Personal website for frontend developer Anže Fajfar, also working as a freelancer at Razvoj spletnih strani, Anže Fajfar s.p. "
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <body className="font-ubuntu">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
