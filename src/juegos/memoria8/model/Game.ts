import Casilla from "./Casilla";

export default class Game {
    public casillas: Casilla[];
    public terminada: boolean;

    constructor(public size: number = 8){
        this.casillas = [];
        this.terminada = false;
        this.generarCasillas();
        this.desordenarCasillas();
    }

    generarCasillas(){
        for(let i = 1; i <= this.size; i++){
            this.casillas.push(new Casilla(i, i));
        }
    }

    esconderCasillas(){
        this.casillas.forEach(casilla => {
            casilla.visible = false;
            casilla.valor = 0;
        });
    }

    desordenarCasillas(){
        for (let i = 0; i < this.casillas.length; i++) {
            let j = Math.floor(Math.random() * (this.casillas.length));
            let temp = this.casillas[i];
            this.casillas[i] = this.casillas[j];
            this.casillas[j] = temp;
        }
    }

    mostrarCasilla(id: number){
        this.casillas.forEach((casilla) => {
            if(casilla.id === id){
                casilla.valor = id;
                casilla.visible = true;
            }
        });
    }

    esconderCasilla(id: number){
        this.casillas.forEach((casilla) => {
            if(casilla.id === id){
                casilla.valor = 0;
                casilla.visible = false;
            }
        });
    }

    obtenerCasilla(id: number){
        this.casillas.forEach((casilla) => {
            if(casilla.id === id){
                return casilla;
            }
        });
        return null;
    }
}