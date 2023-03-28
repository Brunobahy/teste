import React from 'react'
import styles from './NotaCard.module.css'

export default function NotaCard({ titulo, cor, texto, click, id }) {
    return (
        <li className={styles.container} onClick={() => click(id)} >
            <h3 className={styles.titulo} style={{ color: cor }}>{titulo}</h3>
            <p className={styles.texto}>{texto}</p>
        </li>
    )
}
