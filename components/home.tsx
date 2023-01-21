import Head from 'next/head'

import { site } from 'data/site'

import Footer from './footer'
import Header from './header'
import UI from './ui'

const Home = () => {
  const { title, desc, url } = site

  return (
    <div className="p-10">
      <Head>
        <title>{`${title} | ${desc}`}</title>
        <meta name="description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Head>
      <Header />
      <UI />
      <Footer />
    </div>
  )
}

export default Home
