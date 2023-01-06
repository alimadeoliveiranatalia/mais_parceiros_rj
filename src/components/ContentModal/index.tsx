import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../../public/icons_parceiros/john_deere.svg";
import styles from "./styles.module.scss";

export interface ModalProps{
    area: string;
    empresa: string;
    escola: string;
}

export function ContentModal({ area, empresa, escola }: ModalProps){
    return (
        <div className={styles.container}>
            <div className={styles.headermodal}>
                <span>{area}</span>
                <AiFillCloseCircle className={styles.iconClose}/>
            </div>
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
        </div>
    )
}