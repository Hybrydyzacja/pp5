class Client {
    constructor(){}

    nazwaFirmy = "";
    nip = "";
    miasto = "";
    ulica = "";
    uwagi = ""
    branza = "";
    check = true;
}

    getData() {
        return `${this.name} (${this.nip})`;
    }

    getAdress() {
        return "0";
    }


// class Supplier extends Client {
//     constructor(numerKonta){
//         numerKonta = numerKonta;
//         super();
//     }
//     numerKonta = "XYZ123";
// }


