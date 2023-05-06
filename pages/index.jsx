import Rodape from '@/components/Rodape'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/index.module.css'

export default function index() {

  const [texto, setTexto] = useState('Code-hub')
  const [cor, setCor] = useState({ R: 255, G: 255, B: 255 })



  useEffect(() => {
    let textoArray = texto.split('');
    setTexto('')
    let teste = ''
    textoArray.forEach((letra, index) => {
      setTimeout(() => {
        teste += letra
        setTexto(teste)
      }, 75 * index)
    })
  }, [])


  function mudaCor() {
    setCor({ R: Math.random() * 256, G: Math.random() * 256, B: Math.random() * 256 })
  }

  return (
    <main className={styles.pagina}>
      <div className={styles.listaLink}>
        <Link className={styles.link} href="jumping" >Jumping</Link>
        <Link className={styles.link} href="background" >background</Link>
        <Link className={styles.link} href="enfeites" >Enfeites</Link>
        <Link className={styles.link} href="login" >Login</Link>
        <Link className={styles.link} href="notas" >Notas</Link>
        <Link className={styles.link} href="calculadora" >Calculadora</Link>
      </div>

      <section className={styles.info}>
        <h1
          className={styles.titulo}
          style={{ textShadow: `0 0 10px rgb(${cor.R / 2},${cor.G / 2},${cor.B / 2})`, color: `rgb(${cor.R},${cor.G},${cor.B})` }}
          onClick={() => mudaCor()}>
          {texto}
        </h1>

        <p>Site produzido para realizar projetos testes, aprofundar meu conhecimento em programção especialmente em <strong className={styles.destaque} style={{ background: `linear-gradient(360deg, rgb(${cor.R},${cor.G},${cor.B}) 50%, transparent 50%)` }} >ReactJs</strong>  e <strong className={styles.destaque} style={{ background: `linear-gradient(360deg, rgb(${cor.R},${cor.G},${cor.B}) 50%, transparent 50%)` }}>NextJs</strong></p>
      </section>

      <Rodape />
    </main>
  )
}
