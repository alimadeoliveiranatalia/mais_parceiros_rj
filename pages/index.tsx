import Head from 'next/head';
import { Accordion } from '../src/components/Accordion';
import { Footer } from '../src/components/Footer';
import { LinkYoutube } from '../src/components/LinkYoutube';
import { SliderCarousel } from '../src/components/Slidershow';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senai Parceiros</title>
      </Head>
      <div className={styles.contentContainer}>
        <section className={styles.hero}>
          <br />
          <h1 className={styles.title}>Mais Parceiros</h1>
          <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
          <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
          como demostrar os benefícios em ser um parceiro deste programa.</p>
          <p>O programa estabelece os seguintes benefícios:</p>
          <SliderCarousel />
        </section>
      </div>
      <div className={styles.contentContainer}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Depoimentos de quem já fez parte</h1>
          <LinkYoutube />
      </section>
      </div>
      <section className={styles.contentContainer}>
        <h1 className={styles.title}>Modelos de Paceria</h1>
      </section>
      <section className={styles.contentContainer}>
        <h1 className={styles.title}>Como fazer parte</h1>
      </section>
      <Footer />
    </>
  )
}
