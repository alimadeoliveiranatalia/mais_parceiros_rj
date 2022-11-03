import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Footer } from '../src/components/Footer';
import { Carousel } from '../src/components/Carousel';
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
          <h1>Mais Parceiros</h1>
          <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
          <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
          como demostrar os benefícios em ser um parceiro deste programa.</p>
          <p>O programa estabelece os seguintes benefícios:</p>
          <Carousel />
        </section>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.hero}>
          <br />
          <h1>Depoimentos</h1>
          <p>Conheça o pragrama <strong>Mais Parceiros</strong> pelas palavras de quem já faz parte da nossa rede.</p>
          <SliderShowVideo />
        </section>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Modelos de Paceria</h1>
          <p>O <strong>SENAI-SP</strong> estabelece suas parcerias por meio de modelos de negócios que estabelecem contrapartidas, visando</p>
        </section>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Como fazer parte</h1>
          <p>Caso sua empresa esteja interessada em se tornar uma parceria do <strong>SENAI-SP</strong></p>
        </section>
      </div>
      <Footer />
    </>
  )
}
