import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />

        <meta
            name="description"
            content="MERN stack developer looking for a job"
          />
          <meta
            name="keywords"
            content="Front-end Web Developer, Back-end Web Developer, Full Stack Web Developer, Freelancer ,MERN developer"
          />
      </Head>
      <body className='bg-gradient-to-r from-green to-blue-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}