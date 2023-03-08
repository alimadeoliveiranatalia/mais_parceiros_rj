import { FaIndustry } from "react-icons/fa";
import styles from "./styles.module.css";
import list_parceiros from "../../../public/parceiros.json";

export interface ContentModalProps{
    area: number
}

const empresas_mecanica = list_parceiros.mecanica_metalurgica.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_alimentos = list_parceiros.alimentos.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_plasticos = list_parceiros.plasticos.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_tec_informacao = list_parceiros.tecnologia_informacao.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_automotiva = list_parceiros.automotiva.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_refrigeracao = list_parceiros.refrigeracao.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_const_civil = list_parceiros.construcao_civil.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_energia = list_parceiros.energia.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_gestao = list_parceiros.gestao.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry className={styles.icon} />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

export function ContentModal({ area }: ContentModalProps){

    function verify_area(area: number){
        return (
            area === 1 ? empresas_mecanica :
            area === 2 ? empresas_alimentos :
            area === 3 ? empresas_plasticos:
            area === 4 ? empresas_tec_informacao :
            area === 5 ? empresas_automotiva :
            area === 6 ? empresas_refrigeracao : 
            area === 7 ? empresas_const_civil :
            area === 8 ? empresas_energia :
            area === 9 ? empresas_gestao :
            'no_empresas'
        )
    }
    return (
        <div className={styles.container_table}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{'textAlign': 'left'}}>Empresa</th>
                        <th style={{'textAlign': 'left'}}>Escola Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {verify_area(area)}
                </tbody>
            </table>
        </div>
        
    )
}