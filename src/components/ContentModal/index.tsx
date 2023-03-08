import { FaIndustry } from "react-icons/fa";
import styles from "./styles.module.css";
import list_parceiros from "../../../public/parceiros.json";

export interface ContentModalProps{
    area: number
}

const empresas_agronegocio = list_parceiros.mecanica_metalurgica.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry />
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
                <FaIndustry />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_associacoes = list_parceiros.plasticos.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_automacao = list_parceiros.tecnologia_informacao.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry />
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
                <FaIndustry />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_ceramica = list_parceiros.refrigeracao.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry />
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
                <FaIndustry />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_eletronica = list_parceiros.eletronica.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <FaIndustry />
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
                <FaIndustry />
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

export function ContentModal({ area }: ContentModalProps){

    function verify_area(area: number){
        return (
            area === 1 ? empresas_agronegocio :
            area === 2 ? empresas_alimentos :
            area === 3 ? empresas_associacoes:
            area === 4 ? empresas_automacao :
            area === 5 ? empresas_automotiva :
            area === 6 ? empresas_ceramica : 
            area === 7 ? empresas_const_civil :
            area === 8 ? empresas_eletronica :
            area === 9 ? empresas_energia :
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