import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Carousel } from '../src/components/Carousel';
import styles from '../styles/Home.module.scss';
import { Form } from '../src/components/Form';
import { Navigation } from '../src/components/Navigation';
import { MenuToggle } from '../src/components/MenuToggle';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const section_variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export default function Home() {
  const depoimentosRef = useRef();
  const editaisRef = useRef();
  const sejaParceiroRef = useRef();

  const control = useAnimation();
  
  const isInView = useInView(depoimentosRef);
  
  useEffect(() => {
    if(isInView){
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, isInView]);

  return (
    <>
      <Head><title>Senai + Parceiros</title></Head>
        <main>
          <MenuToggle />
          <section  className={styles.sectionContainer}>
            <br />
            <h1>Mais Parceiros</h1>
            <p>O programa <strong>Mais Parceiros</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre o 
            <strong> SENAI</strong> e seus futuros parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
            como demostrar os benefícios em ser um parceiro deste programa.</p>
            <Navigation />
            <p>O programa estabelece os seguintes benefícios:</p>
            <Carousel />
          </section>
          <motion.section 
            ref={ depoimentosRef }
            className={styles.sectionContainer}
            variants={section_variants}
            initial='hidden'
            animate={control}>
            <br />
            <h1 id="depoimentos">Depoimentos</h1>
            <p>Conheça o pragrama <strong>Mais Parceiros</strong> pelas palavras de quem já faz parte da nossa rede.</p>
            <SliderShowVideo />
          </motion.section>
          <motion.section
            ref={editaisRef}
            className={styles.sectionContainer}
            variants={section_variants}
          >
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
          </motion.section>
          <motion.section
            ref={sejaParceiroRef}
            className={styles.sectionContainer}>
            <h1 id="seja_parceiro">Como fazer parte</h1>
            <p>Caso sua empresa esteja interessada em se tornar uma parceria do <strong>SENAI-SP</strong></p>
            <Form />
          </motion.section>
        </main>      
    </>
  )
}
