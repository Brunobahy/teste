import React from 'react'
import styles from './SpanSalvar.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function SpanSalvar({ setSalvar, notasLista, notaAtual, setNotaAtual, setNotasLista }) {

    function salvar() {
        event.preventDefault()

        if (notaAtual.id) {
            setNotasLista(notasLista.map(nota => {
                if (nota.id === notaAtual.id) {
                    console.log('essa e a notaa' + nota)
                    nota = { ...notaAtual }
                }
                return nota
            }))

        } else setNotasLista([...notasLista, { ...notaAtual, id: uuidv4() }])

        console.log(notasLista)
        setSalvar(false)
        console.log(notasLista)
    }

    return (
        <span className={styles.spanSalvar}>
            <div className={styles.boxSalvar}>
                <label className={styles.salvarTitulo} htmlFor="titulo">Titulo da nota</label>
                <input className={styles.salvarInput} onChange={(event) => setNotaAtual({ ...notaAtual, titulo: event.target.value })} type="text" id='titulo' placeholder='Titulo' />
                <button className={styles.confirmar} onClick={(event) => salvar(event)} >salvar</button>
                <button className={styles.fechar} onClick={() => setSalvar(false)} >&#10006;</button>
            </div>
        </span>
    )
}
