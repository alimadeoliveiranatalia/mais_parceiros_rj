import Head from 'next/head';
import { Footer } from '../src/components/Footer';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senai Parceiros</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Mais Parceiros</h1>
          <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o <strong>SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem como demostrar os benefícios em ser um parceiro deste programa.</p>
          <br/>
          <p>O programa estabelece os seguintes benefícios:</p>
          <br/>
          <span>Desenvolvimento de Capital Humano</span>
          <p>As parcerias possibilitam a capacitação do capital humano interno e externo, mantendo atualizados os colaboradores e clientes das empresas parceiras envolvidos no programa.</p>
          <span>Atendimento às novas demandas da Indústria</span>
          <p>Com a inserção de novas tecnologias, torna-se possível a construção e a oferta de produtos e serviços educacionais, tecnológicos e de inovação, compatíveis com a demanda da indústria.</p>
          <span>Antecipação de Tendências Tecnológicas</span>
          <p>É importante que a sociedade esteja preparada para as novas demandas domercado de trabalho, principalmente quando se trata das tecnologias de vanguarda e habilhitadoras para a indústria 4.0.</p>
          <span>Troca de Experiência e Conhecimento</span>
          <p>Uma parceria pode proporcionar uma ampla troca de experiências, trazer insights, adquirir novas habilhidades, que possam contribuir para a expansão do negócio.</p>
          <span>Mais valor agregado para as marcas parceiras</span>
          <p>Bons parceiros contribuem para elevar o nível de exposição das marcas, garantindo mais visibilidade junto aos clientes.</p>
          <span>Difusão Tecnológica</span>
          <p>Os esforços conjuntos do <strong>SENAI</strong> e de seus parceiros, visam a mordenização de processos, mediante ao uso de produtos e serviços difundidos no mercado.</p>
          <span>Capilaridade da Rede Senai</span>
          <p>Uma parceria consolidada com uma Unidade Operacional do <strong>SENAI</strong> posibilita sua disseminação pela rede no estado, trazendo mais vantagens para as empresas parceiras.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
