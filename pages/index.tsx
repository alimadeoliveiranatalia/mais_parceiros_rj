import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Carousel } from '../src/components/Carousel';
import styles from '../styles/Home.module.scss';
import { Form } from '../src/components/Form';
import { Navigation } from '../src/components/Navigation';
import { MenuSocialMedia } from '../src/components/MenuSocialMedia';
import { CardListEmpresas } from '../src/components/CardListEmpresas';
import { DropdownMenuRadixUI } from '../src/components/DropdownMenuRadixUI';

export default function Home() {
  return (
    <>
      <Head><title>Senai + Parceiros</title></Head>
        <main>
          <section id="home" className={styles.sectionContainer}>
            <br />
            <div className={styles.title}>
              <h1>Mais Parceiros</h1>
              <MenuSocialMedia/>
            </div>
            <br />
            <h2>SOBRE O MAIS PARCEIROS</h2>
            <br />
            <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
            <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
            como demostrar os benefícios em ser um parceiro deste programa.</p>
            <br />
            <Navigation />
            <br />
            <p>O programa estabelece os seguintes benefícios:</p>
            <Carousel />
            <h2>UMA REDE PARA + VALORES</h2>
            <br />
            <p>O <strong>SENAI</strong> já consolidou mais de 150 parcerias em diversas áreas tecnológicas, contemplando mais de 34 mil
             bens, distribuídos por sua rede. Alguns exemplos de sucesso estão concentrados nas áreas de automobilística, metalmecâncica e etc.</p>
            <br />
            <h2>EMPRESAS QUE JÁ FAZEM PARTE</h2>
            <br />
            <p>Confira a lista de empresas que já são parceiros:</p>
            <br />
            <CardListEmpresas />
          </section>
          <section className={styles.sectionContainer}>
            <br />
            <h2 id="depoimentos">DEPOIMENTOS</h2>
            <br />
            <p>Conheça o pragrama <strong>Mais Parceiros</strong> pelas palavras de quem já faz parte da nossa rede.</p>
            <br />
            <SliderShowVideo />
          </section>
          <section className={styles.sectionContainer}>
            <h2 id="editais">MODELOS DE PARCERIA</h2>
            <br />
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
            <h2 id="seja_parceiro">COMO FAZER PARTE</h2>
            <br />
            <p>Caso sua empresa esteja interessada em se tornar uma parceria do <strong>SENAI</strong></p>
            <br />
            <Form />
          </section>
        </main>      
    </>
  )
}

