import React, { useEffect, useState } from 'react'
import styles from '../styles/enfeites.module.css'
import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

export default function enfeites() {

    const [posicao, setPosicao] = useState({})

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setPosicao({
                x: event.x,
                y: event.y
            })
        })
    }, [])


    return (
        <div className={styles.pagina}>
            {/* <div className={styles.mouse} style={{ top: posicao.y - 10, left: posicao.x - 10 }} ></div> */}
            <Link href={'/'} style={{position:'absolute', left:0, top:0, color:'#FFF'}}>Inicio</Link>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <BsFacebook className={styles.icone} />
                    <p className={styles.texto}><BsFacebook />Facebook</p>
                </li>
                <li className={styles.item}>
                    <BsGithub className={styles.icone} />
                    <p className={styles.texto}> <BsGithub style={{ display: 'inline-block' }} />GitHub</p>
                </li>
                <li className={styles.item}>
                    <BsLinkedin className={styles.icone} />
                    <p className={styles.texto}><BsLinkedin />Linkedin</p>
                </li>
            </ul>
        </div>
    )
}
