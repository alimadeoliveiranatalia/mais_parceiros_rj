import Head from 'next/head';
import { Accordion } from '../src/components/Accordion';
import { Footer } from '../src/components/Footer';
import { LinkYoutube } from '../src/components/LinkYoutube';
import { SliderShow } from '../src/components/Slidershow';
import styles from '../styles/Home.module.scss';

const questionsAnswers = [
  {
    question: 'Desenvolvimento de Capital Humano',
    answer: 'As parcerias possibilitam a capacitação do capital humano interno e externo, mantendo atualizados os colaboradores e clientes das empresas parceiras envolvidos no programa.'
  },
  {
    question: 'Atendimento às novas demandas da Indústria',
    answer: 'Com a inserção de novas tecnologias, torna-se possível a construção e a oferta de produtos e serviços educacionais, tecnológicos e de inovação, compatíveis com a demanda da indústria.'
  },
  {
    question: 'Antecipação de Tendências Tecnológicas',
    answer: 'É importante que a sociedade esteja preparada para as novas demandas do mercado de trabalho, principalmente quando se trata das tecnologias de vanguarda e habilhitadoras para a indústria 4.0.'
  },
  {
    question: 'Troca de Experiência e Conhecimento',
    answer: 'Uma parceria pode proporcionar uma ampla troca de experiências, trazer insights, adquirir novas habilhidades, que possam contribuir para a expansão do negócio.'
  },
  {
    question: 'Mais valor agregado para as marcas parceiras',
    answer: 'Bons parceiros contribuem para elevar o nível de exposição das marcas, garantindo mais visibilidade junto aos clientes.'
  },
  {
    question: 'Difusão Tecnológica',
    answer: 'Os esforços conjuntos do <strong>SENAI</strong> e de seus parceiros, visam a mordenização de processos, mediante ao uso de produtos e serviços difundidos no mercado.'
  },
  {
    question: 'Capilaridade da Rede Senai',
    answer: 'Uma parceria consolidada com uma Unidade Operacional do <strong>SENAI</strong> posibilita sua disseminação pela rede no estado, trazendo mais vantagens para as empresas parceiras.'
  },
  
]

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
          <SliderShow />
          <Accordion questionsAnswers={questionsAnswers} />
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
