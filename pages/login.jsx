import Cabecalho from '@/components/Cabecalho'
import CaixaLogin from '@/components/CaixaLogin'
import React, { useState } from 'react'
import styles from '../styles/login.module.css'

export default function login() {

  const [login, setLogin] = useState(false)

  return (
    <main className={styles.pagina}>
        <Cabecalho login={login} setLogin={setLogin}/>
    
        {login && <CaixaLogin setLogin={setLogin} />}

    </main>
  )
}
