import Image from "next/image";
import logo from "../../../public/icons_parceiros/john_deere.svg";
import styles from "./styles.module.scss";

export interface ModalProps{
    empresa: string;
    escola: string;
}

export function ContentModal({ empresa, escola }: ModalProps){
    
    return (
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th style={{'textAlign': 'left'}}></th>
                            <th style={{'textAlign': 'left'}}>Escola Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{'textAlign':'center'}}>
                                <Image src={logo} alt='logo empresa' width={45} height={45}/>
                            </td>
                            <td>{empresa}</td>
                            <td>{escola}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    )
}