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