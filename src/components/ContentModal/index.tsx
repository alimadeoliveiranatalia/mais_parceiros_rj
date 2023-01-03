import Image from "next/image";
import logo from "../../../public/icons_parceiros/john_deere.svg";
import { HeaderModal } from "../HeaderModal";
import styles from "./styles.module.scss";

export function ContentModal({ empresa, escola }){
    return (
        <>
            <HeaderModal />
            <table className={styles.table}>
                <tr>
                    <th></th>
                    <th style={{'textAlign': 'left'}}>Empresa</th>
                    <th style={{'textAlign': 'left'}}>Escola Responsável</th>
                </tr>
                <tr>
                    <td style={{'textAlign':'center'}}><Image src={logo} alt='logo empresa' width={45} height={45}/></td>
                    <td>John Deere do Brasil</td>
                    <td>602 - Escola Senai - Ribeirão Preto - Eng. </td>
                </tr>
                <tr>
                    <td></td>
                    <td>{empresa}</td>
                    <td>{escola}</td>
                </tr>
            </table>
        </>
    )
}