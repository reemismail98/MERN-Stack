class Ninja{
    constructor(name) {
        this.name = name;
        this.health=0 ;
        this.speed = 3;
        this.strength = 3;
    }
  sayName(){
     console.log(this.name);
 }
 showStats(){
    console.log("Name:" + this.name + " ,Health:" + this.health + " ,Speed:" + this.speed +" ,Strength:" + this.strength);
 }
 drinkSake(){
     this.health +=10;
     return this.health;
 }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
console.log(ninja1.drinkSake());


class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health=200 ;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();