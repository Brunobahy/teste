import React from 'react'
import styles from './NotaCard.module.css'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { useNotasContext } from '@/common/NotasContext'

export default function NotaCard({ titulo, cor, texto, id }) {

    const {excluir, editar} = useNotasContext()

    return (
        <li className={styles.container}  >
            <h3 className={styles.titulo} style={{ color: cor }}>{titulo}</h3>
            <p className={styles.texto}>{texto}</p>
            <AiFillCloseCircle className={styles.icone} onClick={() => excluir(id)} />
            <AiFillEdit className={styles.icone} onClick={() => editar(id)} />
        </li>
    )
}
