
class Parent{
    constructor(){
        this.fatherNmae = 'babagi amr ferdous';
    }
}


class Child extends Parent{
    constructor(Fname){
        super();
        this.ChildName = Fname;
    }
    getFullName(){
        return this.ChildName +" "+ this.fatherNmae;
    }
}

const baby  =  new Child('zubair');
const baby2 = new Child('labiba');
console.log(baby.getFullName());
console.log(baby2.getFullName());