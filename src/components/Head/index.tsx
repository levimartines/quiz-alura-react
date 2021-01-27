import Head from "next/head";
import React from "react";

export default function HeadQuiz() {
  return (
    <>
      <Head>
        <title>Quiz CSS da Alura</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>

        <meta name="title" content="Quiz CSS da Alura"/>
        <meta name="description" content=""/>

        <meta property="og:site_name" content="Quiz CSS da Alura"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quiz-alura-react.levimartines.vercel.app/"/>
        <meta property="og:title" content="Quiz CSS da Alura"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" itemProp="image"
              content="https://i.ibb.co/fQ73nDh/954a6ffa-58df-4e3f-8bd9-bf2e97130302.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://quiz-alura-react.levimartines.vercel.app/"/>
        <meta property="twitter:title" content="Quiz CSS da Alura/"/>
        <meta property="twitter:description" content=""/>
        <meta property="twitter:image" content="https://i.ibb.co/fQ73nDh/954a6ffa-58df-4e3f-8bd9-bf2e97130302.png"/>

      </Head>
    </>
  )
}
