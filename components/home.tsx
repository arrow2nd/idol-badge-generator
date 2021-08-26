import { site } from '../data/site'
import Head from 'next/head'
import Header from './header'
import UI from './ui'

const Home = () => (
  <div className="p-6">
    <Head>
      <title>{site.title}</title>
      <meta name="description" content={site.desc} />
      <meta property="og:url" content={site.url} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.desc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@arrow_2nd" />
      <meta name="twitter:url" content={site.url} />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.desc} />
    </Head>
    <Header />
    <UI />
  </div>
)

export default Home
