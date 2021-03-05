class Human{

    //コンストラクタ
    constructor(name,height,weight,gender,age){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.age = age;
    }

    //歩くメソッド
    walk(){
        console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました`);
    }
}

let yamada = new Human('yamada', 170, 60, '男', 30);
yamada.walk();