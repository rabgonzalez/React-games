import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Memoria8 from './memoria8/components/Memoria8';
import AcertarNum from './acertarNum/AcertarNum';

type Props = {}

const Practica42 = (props: Props) => {

    return (
        <div className="App">
            <BrowserRouter>
                <h3>Juegos disponibles</h3>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/memoriza" element={<Memoria8 />} />
                    <Route path="/acertarNumero" element={<AcertarNum />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Navbar(){
    return(
        <nav className="Minavbar">
            <Link to="/"> Inicio </Link>
            <Link to="/memoriza"> Memoriza8 </Link>
            <Link to="/acertarNumero"> acertarNumero </Link>
        </nav>
    )
}

function Home(){
    return(
        <h3>Elige un juego</h3>
    )
}

export default Practica42

