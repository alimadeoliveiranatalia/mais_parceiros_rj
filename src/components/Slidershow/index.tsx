import { motion, useScroll } from 'framer-motion';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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



export function SliderShow(){
    const carousel = useRef(null);
    //const { scrollX } = useScroll({ container: carouselRef });
    const [ widthSlider, setWidthSlider ] = useState(0);
    const [index, setIndex] = useState(0);

    function nextStep(){
      if(index === questionsAnswers.length -1){
        setIndex(0);
        return
      }
      setIndex(index+1);
    }

    function prevStep(){
      if(index === 0){
        setIndex(questionsAnswers.length -1);
        return
      }
      setIndex(index-1);
    }

    useEffect(() => {
        setWidthSlider(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    },[]);

    return(
        <div className={styles.slider}>
          <button
            className={styles.iconButton}
          ><AiOutlineLeft /></button>
            <motion.div
              
              ref={ carousel }
              className={styles.carousel}
              whileTap={{ cursor: 'grabbing'}}
            >
              <motion.div
                className={styles.inner}
                drag='x'
                dragConstraints={{ right: 0, left: -widthSlider }}
                initial={{ x:0 }}
                animate={{ x:-100 }}
                transition={{ type: 'spring'}}
              >
                {questionsAnswers.map(item => (
                  <motion.div                          
                    className={styles.item}
                  >
                    <div><span>{item.question}</span><p>{item.answer}</p></div>
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
            <button
              className={styles.iconButton}
            ><AiOutlineRight /></button>
        </div>       
    )
}