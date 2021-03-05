class Taiyaki{

    constructor(name){
        this.name = name;
    }
    contents(){
        console.log(`中身は${this.name}です`);
    }

}

let Anko = new Taiyaki('あんこ');
let Cream = new Taiyaki('クリーム');
let Cheese = new Taiyaki('チーズ');

Anko.contents();
Cream.contents();
Cheese.contents();

