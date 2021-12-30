import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Maiar Pets',
  keywords: 'maiar pets, nft, non fungible token, maiar, pets, elrond, elrondnetwork, blockchain',
  description: 'Unique NFT collection of virtual pets, mint yours now!',
}

export default Meta
