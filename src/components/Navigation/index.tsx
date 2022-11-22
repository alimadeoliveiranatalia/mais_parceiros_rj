import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const links = [
    {
        'aria_label':'Depoimentos',
        'href':'#depoimentos',
        'description': 'Depoimentos de quem já fez parte'
    },
    {
        'aria_label':'Editais',
        'href':'#editais',
        'description': 'Acesse o Edital para Parcerias'
    },
    {
        'aria_label':'Formulário de Participação',
        'href':'#seja_parceiro',
        'description': 'Saiba como fazer parte'
    }
]

export function Navigation(){
    return (
        <nav role='navigation'  className={styles.navigation}>
            {links.map(item => (
                <a
                    key='item'    
                    aria-label={item.aria_label}
                    href={item.href}
                >
                    {item.description}
                </a>
            ))}
        </nav>
    )
}