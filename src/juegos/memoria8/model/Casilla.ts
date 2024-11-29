export default class Casilla {
    public id: number;
    public valor: number;
    public visible: boolean;

    constructor(id: number, valor: number){
        this.id = id;
        this.valor = valor;
        this.visible = true;
    }
}