import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

type Props = {}

const AcertarNum = (props: Props) => {
    const [secret, setSecret] = useState<number>(0);
    const [apuesta, setApuesta] = useState<number>(0);
    const [historial, setHistorial] = useState<string[]>([]);
    const [juego, setJuego] = useState<boolean>(true);

    useEffect(() => {
      setHistorial([]);
      setSecret(Math.floor(Math.random()*10));
      setJuego(true);
    }, [juego]);

    function obtenerApuesta(event: ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setApuesta(event.currentTarget.valueAsNumber);
    }

    function apostar(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        if(apuesta > secret){
            setHistorial([...historial, apuesta+" > ?"]);
        } else if(apuesta < secret){
            setHistorial([...historial, "? > "+apuesta]);
        } else {
            setHistorial([...historial, "Has acertado!"]);
            setTimeout(() => {
                setJuego(false); 
            }, 1000);
        }
    }
    
  return (
    <>
        <input type="number" name="number" id="number" onChange={obtenerApuesta}/>
        <button onClick={apostar}>Submit</button>
        <ul>
            {
                historial.map((jugada) => {
                    return <li>{jugada}</li>
                })
            }
        </ul>
    </>
  )
}

export default AcertarNum