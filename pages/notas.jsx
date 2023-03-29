import React, { useEffect, useState } from 'react'
import styles from '../styles/notas.module.css'
import { AiFillSave, AiOutlineCloudUpload } from 'react-icons/ai'
import NotaCard from '@/components/NotaCard'
import CampoCard from '@/components/CampoCard'
import { useNotasContext } from '@/common/NotasContext';

export default function notas() {

  const { salvar, upLoad, notasLista, setNotasLista } = useNotasContext()

  useEffect(() => {
    setNotasLista(JSON.parse(localStorage.getItem('notas')))
  }, [])

  return (

    <main className={styles.pagina}>
      <aside className={styles.containerLateral}>
        <ul className={styles.lista}>

          {notasLista.length > 0 && notasLista.map((notaItem, index) =>
            <NotaCard key={index} {...notaItem} index={index} />
          )}

        </ul>
        <AiOutlineCloudUpload onClick={() => upLoad()} className={styles.upload} />
      </aside>

      <div>
        <AiFillSave onClick={() => salvar()} className={styles.salvar} />
        <CampoCard />
      </div>
    </main>

  )
}
