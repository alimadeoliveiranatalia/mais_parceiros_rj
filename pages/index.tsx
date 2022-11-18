import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Footer } from '../src/components/Footer';
import { Carousel } from '../src/components/Carousel';
import styles from '../styles/Home.module.scss';
import { Form } from '../src/components/Form';
import { Navigation } from '../src/components/Navigation';
import { MenuToggle } from '../src/components/MenuToggle';

export default function Home() {
  return (
    <>
      <Head><title>Senai + Parceiros</title></Head>
        <main>
          <section  className={styles.sectionContainer}>
            <br />
            <MenuToggle />
            <h1>Mais Parceiros</h1>
            <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
            <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
            como demostrar os benefícios em ser um parceiro deste programa.</p>
            <Navigation />
            <p>O programa estabelece os seguintes benefícios:</p>
            <Carousel />
          </section>
          <section className={styles.sectionContainer}>
            <br />
            <h1 id="depoimentos">Depoimentos</h1>
            <p>Conheça o pragrama <strong>Mais Parceiros</strong> pelas palavras de quem já faz parte da nossa rede.</p>
            <SliderShowVideo />
          </section>
          <section className={styles.sectionContainer}>
            <h1 id="editais">Modelos de Paceria</h1>
            <p>O <strong>SENAI-SP</strong> estabelece suas parcerias por meio de modelos de negócios que estabelecem contrapartidas, 
            visando ganhos bilaterais entre os paceiros</p>
            <span>I. Tipos de instrumentos jurídicos anteriores à formalização de parcerias:</span>
            <ul>
              <li><a>Edital de pacerias</a></li>
              <li><a>Termo de Confidencialidade</a></li>
              <li><a>Protocolo de Intenções</a></li>
            </ul>
            <span>II. Tipos de instrumentos jurídicos para formalização de parcerias:</span>
            <ul>
              <li><a>Convênio: Termo de Cooperação</a></li>
              <li><a>Comodato Padrão</a></li>
              <li><a>Comodato Escolas Móveis</a></li>
              <li><a>Cessão Não-onerosa de Software</a></li>
            </ul>
          </section>
          <section className={styles.sectionContainer}>
            <h1 id="seja_parceiro">Como fazer parte</h1>
            <p>Caso sua empresa esteja interessada em se tornar uma parceria do <strong>SENAI-SP</strong></p>
            <Form />
          </section>
        </main>      
      <Footer />
    </>
  )
}
