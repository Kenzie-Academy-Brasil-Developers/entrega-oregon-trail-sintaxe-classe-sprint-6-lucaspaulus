class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

   hunt() {
       // sitting code here
       this.food += 2
   }
   eat() {
       // fetching code here
       if(this.food > 0){
            this.food--
       }else{
            this.isHealthy = false   
       }
   }
}

class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }
    join(Traveler){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine(){
        for(let i = 0; i < this.passengers.length; i++){
            if(!this.passengers[i].isHealthy){
                return true
            }
        }
        return false
    }
    totalFood(){
        let totalFoods = 0
        for(let i = 0; i < this.passengers.length; i++){
            totalFoods += this.passengers[i].food 
        }
        return totalFoods
    }
}

/*****************************TESTA O CÓDIGO***************************/ 
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
/************************************************************************/ 