import React from 'react'
import styles from './Cabecalho.module.css'
export default function Cabecalho({login, setLogin}) {
    return (
        <header className={styles.cabecalho}>
            <h3 className={styles.logo}>Logo</h3>
            <nav className={styles.lista}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>About</li>
                <li className={styles.item}>Services</li>
                <li className={styles.item}>Contact</li>
                <li className={styles.item} onClick={()=> setLogin(!login)}>login</li>
            </nav>
        </header>
    )
}
