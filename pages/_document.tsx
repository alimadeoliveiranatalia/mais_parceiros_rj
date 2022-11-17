﻿import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(){
    return(
        <Html lang="pt-BR">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
                <title>Senai + Parceiros</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}