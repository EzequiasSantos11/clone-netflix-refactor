import Head from "next/head";

type HeadProps = {
  title?: string,
  description?: string
}

export function HeadComponent({title, description}: HeadProps){
  return(
    <Head>
      <title>{title ? title : "teste"}</title>
      <meta name="description" content={description ? description : "Generated by create next app"} />
      <link rel="icon" href="/img/logo-nf.png" />
    </Head>
  )
}