import { createContext, useContext, useState } from "react";

export const CalculadoraContext = createContext();
CalculadoraContext.displayName = 'calculadora'

export function CalculadoraProvider({ children }) {
    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [operador, setOperador] = useState('')
    const operadores = ['+', '-', '*', '/']
    const [resultado, setResultado] = useState(0)

    return (
        <CalculadoraContext.Provider value={{ valor1, setValor1, valor2, setValor2, operador, setOperador, operadores, resultado, setResultado }}>
            {children}
        </CalculadoraContext.Provider>
    )

}



export function useCalculadoraContext() {

    const { valor1, setValor1, valor2, setValor2, operador, setOperador, operadores, resultado, setResultado } = useContext(CalculadoraContext)

    function escolhe(valor) {

        if (operador) {
            return setValor2(valor2 + valor)

        } else setValor1(valor1 + valor)

    }

    function calcula() {
        let numero1 = Number(valor1)
        let numero2 = Number(valor2)

        setValor1('')

        setValor2('')

        if (operador === '+') {
            setOperador('')
            return (numero1 + numero2)
        }
        if (operador === '-') {
            setOperador('')
            return (numero1 - numero2)
        }
        if (operador === 'X') {
            setOperador('')
            return (numero1 * numero2)
        } else return (
            setOperador(''),
            (numero1 / numero2)
        )
    }

    function escolheOperador(valor) {

        if (valor1.length === 0 && valor2.length === 0) {
            return setValor1(valor)
        }

        if (operador) {
            setValor1(calcula().toString())
        }
        setOperador(valor)
    }

    function verificaTeclado(tecla) {
        console.log(tecla)
        //capta a tecla baixada, trasforma em numero e verifica se é NaN e resolve
        if (!isNaN(Number(tecla))) {
            return escolhe(tecla)
        }
        if (operadores.find(operador => operador === tecla)) {
            return escolheOperador(tecla)
        }
        if (tecla === 'Enter') {
            setResultado(calcula())
        }
        if (tecla === 'Backspace') {
            excluir()
        }
        if (tecla === '.') {
            escolhe(tecla)
        }
    }

    function excluir() {

        if (valor2.length > 0) {
            return setValor2(valor2.slice(0, valor2.lastIndexOf()))
        }
        if (valor1.length > 0) {
            return setValor1(valor1.slice(0, valor1.lastIndexOf()))
        } else (setValor1(''), setValor2(''), setOperador(''))

    }

    return {
        valor1,
        setValor1,
        valor2,
        setValor2,
        operador,
        setOperador,
        operadores,
        resultado,
        setResultado,
        escolhe,
        escolheOperador,
        calcula,
        excluir,
        verificaTeclado
    }


}