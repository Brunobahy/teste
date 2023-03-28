import { createContext, useContext, useState } from "react";

export const UsuarioContext = createContext()
UsuarioContext.displayName = 'Usuario'

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export function useUsuarioContext() {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    function salvaUsuario(usuario) {
        console.log(JSON.stringify(usuario))
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    function fazerLogin(dados) {
        console.log(dados)
        const usuario = JSON.parse(localStorage.getItem('usuario'))
        console.log(usuario)
        const valida = {
            senha: dados.senha === usuario.senha,
            email: dados.email === usuario.email,
            valido: (dados.senha === usuario.senha && dados.email === usuario.email)
        }
        return valida
    }

    return {
        usuario,
        setUsuario,
        salvaUsuario,
        fazerLogin
    }
}