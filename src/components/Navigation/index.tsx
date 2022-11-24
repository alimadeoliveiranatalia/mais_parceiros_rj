import styles from './styles.module.scss';

const links = [
    {
        'aria_label':'Depoimentos',
        'href':'#depoimentos',
        'description': 'DEPOIMENTOS DE QUEM JÁ FAZ PARTE'
    },
    {
        'aria_label':'Editais',
        'href':'#editais',
        'description': 'ACESSE O EDITAL PARA PARCERIAS'
    },
    {
        'aria_label':'Formulário de Participação',
        'href':'#seja_parceiro',
        'description': 'SAIBA COMO FAZER PARTE'
    }
]

export function Navigation(){
    return (
        <nav role='navigation'  className={styles.navigation}>
            {links.map((item, id) => (
                <a
                    key={id}    
                    aria-label={item.aria_label}
                    href={item.href}
                >
                    {item.description}
                </a>
            ))}
        </nav>
    )
}