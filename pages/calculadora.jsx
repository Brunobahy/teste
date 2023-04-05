import CalculadoraFuncional from '@/components/CalculadoraFuncional'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/calculadora.module.css'

export default function Calculadora() {


    return (
        <main className={styles.pagina}>
            <Link className={styles.voltar} href={'/'}>&#8617;</Link>

            <div className={styles.container__calculadora}>
                <CalculadoraFuncional />

            </div>
        </main>
    )
}
