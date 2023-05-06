import React, { useEffect, useState } from 'react'
import CalculadoraFuncional from '../CalculadoraFuncional'
import styles from './CalculadoraMovel.module.css'
import {BiMove, BiWindowClose} from 'react-icons/bi'
import {motion} from 'framer-motion'

export default function CalculadoraMovel({setCalculadoraAberto}) {

    const [calculadora, setCalculadora] = useState({})
    const [movimenta, setMovimenta] = useState({ move: false, x: '', y: '' })

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setCalculadora({ x: event.x, y: event.y })
        })
    }, [movimenta])

    return (
        <motion.span
            initial={{clipPath: 'inset(0 0 100% 0', right: '50px'}}
            animate={{clipPath: 'inset(0 0 0 0)'}}
            exit={{clipPath: 'inset(0 0 100% 0'}}
            key={'calculadoraMovel'}
            className={styles.container__calculadora}
            style={
                movimenta.move
                    ? {
                        top: calculadora.y - 10,
                        left: calculadora.x - 10
                    }
                    : {
                        top: movimenta.y,
                        left: movimenta.x
                    }
            }
        >
            <BiWindowClose onClick={() => setCalculadoraAberto(false)} className={styles.fecha} />
            <BiMove className={styles.movimenta} onClick={(event) => setMovimenta({ move: !movimenta.move, x: event.clientX -10 , y: event.clientY -10 })}/>
            <CalculadoraFuncional />
        </motion.span>
    )
}
