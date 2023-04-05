import React, { useEffect, useState } from 'react'
import styles from '../styles/notas.module.css'
import { AiFillSave, AiFillCalculator } from 'react-icons/ai'
import CampoCard from '@/components/CampoCard'
import { useNotasContext } from '@/common/NotasContext';
import ListaLateral from '@/components/ListaLateral'
import { AnimatePresence, motion } from 'framer-motion'
import CalculadoraMovel from '@/components/CalculadoraMovel';

export default function notas() {

  const { salvar, setNotasLista, notaAtual, alerta, setAlerta, verifica } = useNotasContext()

  const [calculadoraAberto, setCalculadoraAberto] = useState(false)


  useEffect(() => {
    setNotasLista(JSON.parse(localStorage.getItem('notas')))
  }, [])


  return (

    <main className={styles.pagina}>
      <ListaLateral />

      <AiFillSave onClick={() => verifica()} className={styles.salvar} />

      <CampoCard />

      {alerta && <motion.span
        className={styles.alerta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.alertaBox}>
          {!notaAtual.titulo && <p className={styles.alertaTexto} >Você quer salvar sem titulo?</p>}
          {!notaAtual.texto && <p className={styles.alertaTexto} >Você quer salvar sem texto?</p>}
          <div className={styles.boxButton}>
            <p onClick={() => { salvar(), setAlerta(false) }} className={styles.alertaButton}>&#10003;</p>
            <p onClick={() => setAlerta(false)} className={styles.alertaButton}>X</p>
          </div>
        </div>
      </motion.span>}

      {/* fazer com que esta parte seja responsiva e apareça em qualquer lugar que queira */}
      <AiFillCalculator className={styles.botaoCalculadora} onClick={() => setCalculadoraAberto(!calculadoraAberto)} />
      <AnimatePresence>
        {calculadoraAberto && <CalculadoraMovel setCalculadoraAberto={setCalculadoraAberto} />}
      </AnimatePresence>
    </main >

  )
}
