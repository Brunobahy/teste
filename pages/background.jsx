import React, { useEffect, useState } from 'react'
import styles from '../styles/background.module.css'

export default function background() {


    const [cor, setCor] = useState('000')

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
           
            console.log( event.x)
            setCor(event.x)
        })

    }, [])

    return (
        <div className={styles.pagina}>

            <div className={styles.semMascara}>
                <p>Sem Mascara</p>
            </div>

            <div className={styles.mascara}>
                <p>Com Mascara</p>
            </div>

            <div className={styles.gifMascara}>
                <p>Gif Mascara</p>
            </div>

            <div className={styles.imagemMascara}>
                <p>Imagem Mascara</p>
            </div>

            <div className={styles.textoSobreImagem}>
                <p>Texto Sobre Imagem</p>
            </div>

            <div
                className={styles.backgroundChangeMouse}
                style={{ background: `#${cor}` }}
            >
                <p>muda background com mouse</p>
            </div>

        </div>
    )
}
