import { useCalculadoraContext } from '@/common/CalculadoraContext'
import React from 'react'
import styles from './CalculadoraFuncional.module.css'

export default function CalculadoraFuncional() {

    const { resultado, valor1, escolhe, operador, valor2, escolheOperador, setResultado, calcula, excluir, verificaTeclado } = useCalculadoraContext()

    return (
        <div className={styles.calculadora}
            tabIndex={0}
            onKeyDown={(event) => verificaTeclado(event.key)}
        >
            <div className={styles.display}>
                <span className={styles.resultado}>{!resultado ? 0 : resultado}</span>
                <span className={styles.calculo}>{valor1 ? `${valor1 + operador + valor2}` : ''}</span>
            </div>
            <div className={styles.grid}>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'9'}>9</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'8'}>8</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'7'}>7</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'6'}>6</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'5'}>5</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'4'}>4</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'3'}>3</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'2'}>2</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'1'}>1</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'0'}>0</button>
                <button className={styles.botoes} onClick={(event) => escolhe(event.target.value)} value={'.'}>.</button>
                <button className={styles.botoes} onClick={(event) => escolheOperador(event.target.value)} value={'+'}>+</button>
                <button className={styles.botoes} onClick={(event) => escolheOperador(event.target.value)} value={'-'}>-</button>
                <button className={styles.botoes} onClick={(event) => escolheOperador(event.target.value)} value={'X'}>X</button>
                <button className={styles.botoes} onClick={(event) => escolheOperador(event.target.value)} value={'/'}>/</button>
                <button className={styles.botoes} onClick={(event) => excluir(event.target.value)} value={'Del'}>Del</button>
                <button className={styles.botoes} onClick={() => setResultado(calcula())} value={'='}>=</button>
            </div>
        </div>
    )
}
