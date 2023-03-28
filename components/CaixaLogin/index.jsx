import React, { useState } from 'react'
import styles from './CaixaLogin.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useUsuarioContext } from '@/common/UsuarioContext'
import { useRouter } from 'next/router'

export default function CaixaLogin({ setLogin }) {

    const { usuario, setUsuario, salvaUsuario, fazerLogin } = useUsuarioContext()

    const [register, setRegister] = useState(false)

    const [dadosLogin, setDadosLogin] = useState({})

    const router = useRouter()

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            key={'login'}
            className={styles.container}
        >
            <AnimatePresence>
                <span className={styles.fechar} onClick={() => setLogin(false)} >&#10006;</span>
                {!register && <motion.form
                    onSubmit={(event) => { if (fazerLogin(dadosLogin).valido === true) { event.preventDefault(), router.push('/') } else event.preventDefault() }}
                    key={'login'}
                    className={styles.form}
                    initial={{ x: -100, opacity: 0, display: 'none' }}
                    animate={{ x: 0, opacity: 1, display: 'flex' }}
                    transition={{ bounce: 0 }}
                    exit={{ x: -100, opacity: 0, display: 'none' }}
                >
                    <h3 className={styles.titulo}>Login</h3>
                    <input value={dadosLogin.email} onChange={(event) => setDadosLogin({ ...dadosLogin, email: event.target.value })} className={styles.input} type="text" id='email' placeholder='Email' />
                    <input value={dadosLogin.senha} onChange={(event) => setDadosLogin({ ...dadosLogin, senha: event.target.value })} className={styles.input} type="password" id='password' placeholder='Password' />
                    <div className={styles.boxRemember}>
                        <div>
                            <input type="checkbox" name="remeber" id="Remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className={styles.link}>Forgot Password</a>
                    </div>
                    <button disabled={!(dadosLogin.email && dadosLogin.senha)} className={styles.button} onClick={(event) => { if (fazerLogin(dadosLogin).valido === true) {event.preventDefault(), router.push('/') } else event.preventDefault() }}>Login</button>
                    <p>Don't have a account? <a href="#" onClick={(event) => { setRegister(!register), event.preventDefault() }} className={styles.link}>Register</a></p>
                </motion.form>}

                {register && <motion.form
                    action=""
                    key={'register'}
                    className={styles.form}
                    initial={{ x: 100, opacity: 0, display: 'none' }}
                    animate={{ x: 0, opacity: 1, display: 'flex' }}
                    transition={{ bounce: 0 }}
                    exit={{ x: 100, opacity: 0, display: 'none' }}
                >
                    <h3 className={styles.titulo}>Register</h3>

                    <input value={usuario.nome} onChange={(event) => setUsuario({ ...usuario, nome: event.target.value })} className={styles.input} type="text" id='username' placeholder='Username' />
                    <input value={usuario.email} onChange={(event) => setUsuario({ ...usuario, email: event.target.value })} className={styles.input} type="email" id='email' placeholder='Email' />
                    <input value={usuario.senha} onChange={(event) => setUsuario({ ...usuario, senha: event.target.value })} className={styles.input} type="password" id='password' placeholder='Password' />
                    <div>
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">I agree to the terms & conditions</label>
                    </div>
                    <button disabled={!(usuario.nome && usuario.email && usuario.senha)} onClick={(event) => { event.preventDefault(), salvaUsuario(usuario), setRegister(!register) }} className={styles.button}>Register</button>
                    <p>Already have an account? <a href="#" onClick={(event) => { setRegister(!register), event.preventDefault() }} className={styles.link}>Login</a></p>
                </motion.form>}
            </AnimatePresence>
        </motion.div>



    )
}
