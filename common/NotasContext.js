import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const NotasContext = createContext();
NotasContext.displayName = 'notas'

export function NotasProvider({ children }) {
    const [notasLista, setNotasLista] = useState([])
    const [notaAtual, setNotaAtual] = useState({})

    return (
        <NotasContext.Provider value={{ notasLista, setNotasLista, notaAtual, setNotaAtual }}>
            {children}
        </NotasContext.Provider>
    )
}

export function useNotasContext() {
    const { notasLista, setNotasLista, notaAtual, setNotaAtual } = useContext(NotasContext)

    function editar(id) {
        if (notaAtual.id === id) {
            setNotaAtual('')
        }
        setNotaAtual(notasLista.find(nota => nota.id === id))
    }

    function upLoad() {
        localStorage.setItem('notas', JSON.stringify(notasLista))
    }


    function salvar() {

        if (notaAtual.id && notasLista.length >= 1) {
            setNotasLista(notasLista.map(nota => {

                if (nota.id === notaAtual.id) {
                    nota = { ...notaAtual }
                }
                return nota

            }))
        } else setNotasLista([...notasLista, { ...notaAtual, id: uuidv4() }])
        setNotaAtual({ texto: '', titulo: '' })
    }

    function excluir(id) {
        if (notasLista.length >= 2) {
            setNotasLista(notasLista.filter(nota => nota.id !== id))
        } else setNotasLista('')
    }

    return {
        editar,
        upLoad,
        salvar,
        excluir,
        notasLista,
        setNotasLista,
        notaAtual,
        setNotaAtual
    }
}