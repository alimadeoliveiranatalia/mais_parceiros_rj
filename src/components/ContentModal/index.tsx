import Image from "next/image";
import logo from "../../../public/icons_parceiros/john_deere.svg";
import styles from "./styles.module.scss";

export interface ModalProps{
    empresa: string;
    escola: string;
}

export function ContentModal({ empresa, escola }: ModalProps){
    
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
                        <tr>
                            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                                <Image src={logo} alt='logo empresa' width={45} height={45}/>
                                <div style={{'margin': '1rem'}}>{empresa}</div>
                            </td>
                            <td>{escola}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    )
}