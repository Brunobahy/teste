import { useAnimationControls } from "framer-motion";

const { createContext, useState, useContext } = require("react");

export const MovimentosContext = createContext();
MovimentosContext.displayName = 'movimentos';

export default function MovimentosProvider({ children }) {

  const [tamanho, setTamanho] = useState(0)
  const [soma, setSoma] = useState(false)
  const [eixoX, setEixoX] = useState(10)
  const [Xantigo, setXantigo] = useState(eixoX)

  const animacao = useAnimationControls()
  const barraForca = useAnimationControls()

  return (
    <MovimentosContext.Provider value={{ animacao, barraForca, tamanho, setTamanho, soma, setSoma, eixoX, setEixoX, Xantigo, setXantigo }}>
      {children}
    </MovimentosContext.Provider>
  )

}

export function useMovimentosContext() {
  const { animacao, barraForca, tamanho, setTamanho, soma, setSoma, eixoX, setEixoX, Xantigo, setXantigo } = useContext(MovimentosContext);




  function aleatorio(valor) {
    return Math.floor(Math.random() * valor)
  }

  function carrega() {

    if (tamanho === 250) {
      setSoma(-15)
    }
    if (tamanho <= 0) {
      setSoma(15)
    }
    barraForca.start({
      width: [`${tamanho}px`, '10px']
    })
    setTamanho(tamanho + soma)

  }

  function pular() {
    animacao.start({
      y: [0, -tamanho, 0],
      rotate: ['0deg', '-20deg', '0deg', '20deg', '0deg'],
      transition: { duration: 1 }
    })
    setTamanho(0)
    setSoma(25)
  }

  function movimenta(tecla) {

    if (tecla === 'ArrowRight') {
      setXantigo(eixoX)
      setEixoX(eixoX + 10)

      animacao.start({

        x: [Xantigo, eixoX]

      })

    }

    if (tecla === 'ArrowLeft') {
      setXantigo(eixoX)
      setEixoX(eixoX - 10)

      animacao.start({

        x: [Xantigo, eixoX]

      })

    }

  }


  return {
    animacao,
    barraForca,
    tamanho,
    setTamanho,
    soma,
    setSoma,
    aleatorio,
    carrega,
    pular,
    movimenta,
    eixoX,
    setEixoX
  }
}