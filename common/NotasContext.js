import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const NotasContext = createContext();
NotasContext.displayName = 'notas'

export function NotasProvider({ children }) {
    const [notasLista, setNotasLista] = useState([])
    const [notaAtual, setNotaAtual] = useState({})
    const [alerta, setAlerta] = useState(false)

    return (
        <NotasContext.Provider value={{ notasLista, setNotasLista, notaAtual, setNotaAtual, alerta, setAlerta }}>
            {children}
        </NotasContext.Provider>
    )
}

export function useNotasContext() {
    const { notasLista, setNotasLista, notaAtual, setNotaAtual, alerta, setAlerta } = useContext(NotasContext)

    // função para editar nota já salva
    function editar(id) {
        if (notaAtual.id === id) {
            setNotasLista(notasLista.map(nota => {
                if (nota.id === id) {
                    nota.cor = 'lightgray'
                }
                return nota
            }))
            return setNotaAtual({ texto: '', titulo: '' })
        } else {

            setNotaAtual(notasLista.find(nota => nota.id === id))
            setNotasLista(notasLista.map(nota => {
                if (nota.id === id) {
                    nota.cor = "#dfd880"
                } else nota.cor = ''
                return nota
            }))
        }
    }

    //upload para o localstorage
    function upLoad() {
        localStorage.setItem('notas', JSON.stringify(notasLista))
    }

    //alerta de campo faltando
    function verifica() {
        if (notaAtual.texto && notaAtual.titulo) {
            salvar()
        } else setAlerta(true)


    }

    //verifica se a nota esta sendo editada e salva a nota do modo certo (sobrescrevendo ou só adicionando)
    function salvar() {

        if (notaAtual.id && notasLista.length >= 1) {
            setNotasLista(notasLista.map(nota => {

                if (nota.id === notaAtual.id) {
                    nota = { ...notaAtual, cor: '' }
                }
                return nota

            }))
        } else setNotasLista([...notasLista, { ...notaAtual, id: uuidv4() }])

        setNotaAtual({ texto: '', titulo: '' })
    }

    //exclui a nota 
    function excluir(id) {
        if (notasLista.length >= 2) {
            setNotasLista(notasLista.filter(nota => nota.id !== id))
        } else setNotasLista('')
    }

    //recebe o texto e verifica com as notas, os que não possuem o texto ele esconde
    function filtrar(texto) {

        setNotasLista(notasLista.map(nota => {

            if (texto.length === 0) {
                nota.esconde = false
            } else {

                for (let i = 0; i < texto.length; i++) {

                    var expressao = new RegExp(texto, "i")

                    if (!expressao.test(nota.texto) && !expressao.test(nota.titulo)) {
                        nota.esconde = true
                    }
                }
            }
            return nota
        }))

    }

    return {
        editar,
        upLoad,
        salvar,
        excluir,
        notasLista,
        setNotasLista,
        notaAtual,
        setNotaAtual,
        alerta,
        setAlerta,
        verifica,
        filtrar
    }
}