import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Carousel } from '../src/components/Carousel';
import styles from '../styles/Home.module.scss';
import { Form } from '../src/components/Form';
import { Navigation } from '../src/components/Navigation';
import { MenuSocialMedia } from '../src/components/MenuSocialMedia';

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
    answer: 'Os esforços conjuntos do SENAI e de seus parceiros, visam a mordenização de processos, mediante ao uso de produtos e serviços difundidos no mercado.'
  },
  {
    question: 'Capilaridade da Rede Senai',
    answer: 'Uma parceria consolidada com uma Unidade Operacional do SENAI posibilita sua disseminação pela rede no estado, trazendo mais vantagens para as empresas parceiras.'
  }    
];
export default function Home() {
  return (
    <>
      <Head><title>Senai + Parceiros</title></Head>
        <main>
          <section  className={styles.sectionContainer}>
            <br />
            <div className={styles.title}>
              <h1>Mais Parceiros</h1>
              <MenuSocialMedia />
            </div>
            <br />
            <h2>SOBRE O MAIS PARCEIROS</h2>
            <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
            <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
            como demostrar os benefícios em ser um parceiro deste programa.</p>
            <Navigation />
            <p>O programa estabelece os seguintes benefícios:</p>
            <Carousel />
            <h2>UMA REDE PARA + VALORES</h2>
            <p>O <strong>SENAI</strong> já consolidou mais de 150 parcerias em diversas áreas tecnológicas, contemplando mais de 34 mil
             bens, distribuídos por sua rede. Alguns exemplos de sucesso estão concentrados nas áreas de automobilística, metalmecâncica e etc.</p>
            <br />
            <h2>EMPRESAS QUE JÁ FAZEM PARTE</h2>
            <p>Confira a lista de empresas que já são parceiros:</p>
          </section>
          <section className={styles.sectionContainer}>
            <br />
            <h2 id="depoimentos">DEPOIMENTOS</h2>
            <p>Conheça o pragrama <strong>Mais Parceiros</strong> pelas palavras de quem já faz parte da nossa rede.</p>
            <SliderShowVideo />
          </section>
          <section className={styles.sectionContainer}>
            <h2 id="editais">MODELOS DE PARCERIA</h2>
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
            <p>Caso sua empresa esteja interessada em se tornar uma parceria do <strong>SENAI-SP</strong></p>
            <Form />
          </section>
        </main>      
    </>
  )
}
