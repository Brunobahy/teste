import { useNotasContext } from '@/common/NotasContext'
import React from 'react'
import styles from './CampoCard.module.css'

export default function CampoCard() {
    
    const { notaAtual, setNotaAtual } = useNotasContext()

    return (
        <div className={styles.container}>
            <input className={styles.input} value={notaAtual.titulo} onChange={(event) => setNotaAtual({ ...notaAtual, titulo: event.target.value })} type="text" placeholder='Titulo' />
            <textarea className={styles.text} name="" value={notaAtual.texto} onChange={(event) => setNotaAtual({ ...notaAtual, texto: event.target.value })}></textarea>
        </div>
    )
}
