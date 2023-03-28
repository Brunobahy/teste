import React, { useState } from 'react'
import styles from '../styles/notas.module.css'
import { AiFillSave } from 'react-icons/ai'
import NotaCard from '@/components/NotaCard'
import SpanSalvar from '@/components/SpanSalvar'
import { v4 as uuidv4 } from 'uuid';

export default function notas() {

  const [salvar, setSalvar] = useState(false)
  const [notasLista, setNotasLista] = useState([])
  const [notaAtual, setNotaAtual] = useState({})

  function editar(id) {
    if(notaAtual.id === id){
      setNotaAtual('')
    }
    setNotaAtual(notasLista.find(nota => nota.id === id))
  }

  return (
    <main className={styles.pagina}>
      <aside className={styles.containerLateral}>
        <ul className={styles.lista}>
          {notasLista.length > 0 && notasLista.map((notaItem, index) =>
            <NotaCard key={index} {...notaItem} click={editar} index={index} />
          )}
        </ul>
      </aside>
      <div>
        <AiFillSave onClick={() => {setSalvar(true), setNotaAtual({ ...notaAtual, id: uuidv4() })}} className={styles.salvar} />
        <textarea className={styles.text} name="" value={notaAtual.texto} onChange={(event) => setNotaAtual({ texto: event.target.value })} id="" cols="30" rows="10"></textarea>
      </div>
      {salvar && <SpanSalvar setSalvar={setSalvar} notasLista={notasLista} setNotasLista={setNotasLista} notaAtual={notaAtual} setNotaAtual={setNotaAtual} />}
    </main>
  )
}
