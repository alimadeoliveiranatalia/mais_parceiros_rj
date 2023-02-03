import styles from './styles.module.scss';

export function Navigation(){
    return (
        <nav role='navigation'  className={styles.navigation}>
            <a 
                href="#depoimentos"
                aria-label='Ouça os depoimentos de quem já faz parte'
            >
                DEPOIMENTOS DE QUEM JÁ FAZ PARTE
            </a>
            <a 
                href="#editais"
                aria-label='acesse nossos editais'
                style={
                    {
                        'backgroundColor': '#FFF',
                        'color': 'var(--blue)',
                        'border': '0.15rem solid var(--blue)',
                        'transition': 'var(--gray-300) 0.2s'
                        
                    }
                }
            >
                ACESSE O EDITAL PARA PARCEIRAS
            </a>
            <a 
                href="#seja_parceiro"
                aria-label='Preencha nosso formulário'
            >
                SAIBA COMO SE TORNAR UM PARCEIRO
            </a>
        </nav>
    )
}