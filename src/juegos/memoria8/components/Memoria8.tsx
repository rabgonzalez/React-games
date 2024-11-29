import React, { useEffect, useRef, useState } from 'react'
import Game from '../model/Game';
import '../style/css/Memoria.css';

type Props = {}

const Memoria8 = (props: Props) => {
  const [contador, setContador] = useState<number>(0);
  const [iterator, setIterator] = useState<number>(1);

  const game = useRef<Game>(new Game);

  useEffect(() => {
    game.current = new Game();

    setIterator(1);
    setContador(-1);

    setTimeout(() => {
      game.current.esconderCasillas();
      setContador(0);
    }, 3000);
  }, [])

  function apostar(id: number){
    if(id === iterator){
      game.current.mostrarCasilla(id);
      setIterator(iterator+1);

    } else {
      game.current.mostrarCasilla(id);

      setTimeout(() => {
        game.current.esconderCasilla(id);
        setContador(contador+2);
      }, 500);

      setContador(contador+1);
    }
  }

  return (
    <div className="juego">
      <h2>Memoriza 8</h2>
      <div className="botones">
      {
        game.current.casillas.map((casilla) => {
          return <button className="mostrar" value={casilla.id} onClick={() => apostar(casilla.id)}>{casilla.valor}</button>
        })
      }
      </div> 
      <p>{Math.trunc(contador/2)}</p>
    </div>
  )
}

export default Memoria8