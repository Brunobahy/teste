import { useNotasContext } from '@/common/NotasContext'
import React, { useState } from 'react'
import styles from './ListaLateral.module.css'
import NotaCard from '@/components/NotaCard'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import Link from 'next/link'

export default function ListaLateral() {
    const { notasLista, upLoad, filtrar } = useNotasContext()
    const [ordem, setOrdem] = useState('column')


    return (
        <aside className={styles.containerLateral}>

            <Link className={styles.voltar} href={'/'}>&#8617;</Link>

            <div className={styles.containerFiltro}>
                <input className={styles.filtro} type="text" onChange={(event) => filtrar(event.target.value)} placeholder='Encontrar nota' />

                {ordem === 'column' 
                ?<span className={styles.ordem} onClick={()=> setOrdem("column-reverse")}>Data 🠕</span>
                :<span className={styles.ordem} onClick={()=> setOrdem("column")}>Data 🠗</span>}

                {/* <select className={styles.filtro} name="ordenar" onChange={(event) => setOrdem(event.target.value)} id="ordenar">
                    <option className={styles.options} value="column">Data &#129045;</option>
                    <option className={styles.options} value="column-reverse">Data &#129047;</option>
                </select> */}
            </div>

            <ul className={styles.lista} style={{ flexDirection: ordem }}>
                {notasLista.length > 0 && notasLista.map((notaItem, index) =>
                    <NotaCard key={index} {...notaItem} index={index} />
                )}

            </ul>
            <AiOutlineCloudUpload onClick={() => upLoad()} className={styles.upload} />
        </aside>
    )
}
