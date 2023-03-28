import { useMovimentosContext } from '@/components/movimentos'
import { motion, useAnimationControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/jumping.module.css'

export default function jumping() {
    const { aleatorio, tamanho, carrega, animacao, barraForca, pular, movimenta, eixoX } = useMovimentosContext()

    //movimento

    const [vooPassaro, setVooPassaro] = useState(['10px', '250px', '100px', '50px'])


    // useEffect(() => {

    //     window.addEventListener('D', (event) => {

    //     })


    //     let teste = document.querySelector('#inimigo')

    //     teste.addEventListener('', (event) => {
    //         console.log(event)
    //     })

    // }, [])



    return (
        <div className={styles.pagina}>

            <div className={styles.cenario}
                tabIndex={0}
                onKeyDown={(event) => { event.code === 'Space' && carrega(), movimenta(event.code) }}
                onKeyUp={(event) => event.code === 'Space' && pular()}
            >
                <img className={styles.bkg} src="/gifNuvem2.gif" alt="" />

                <motion.div
                    className={styles.carregamento}
                    initial={{ width: `10px` }}
                    animate={barraForca}

                >
                    {tamanho}
                </motion.div>

                <motion.div
                    className={styles.personagemHitBox}
                    initial={{ x: eixoX, y: 0 }}
                    animate={animacao}
                    id="personagem"
                >
                    <motion.img
                        className={styles.personagem}
                        src="/aviao2.gif" alt="personagem"
                    />
                </motion.div>

                <motion.img
                    id='inimigo'
                    className={styles.inimigo}
                    initial={{ right: '10px', bottom: '10px' }}
                    animate={{ left: -50, bottom: vooPassaro, transition: { duration: 3 } }}
                    src="/passaro.gif"
                    alt="inimigo"
                />
            </div>

        </div >
    )
}
