class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }
    set name(characterName){
        this._name = characterName
    
    }

    get name(){
        return this._name
    }

    set food(qtdFood){
        this._food = qtdFood
    }    

    get food(){
        return this._food
    }

    set isHealthy(characterHealthy){
        this._isHealthy = characterHealthy
    }

    get isHealthy(){
        return this._isHealthy
    }
   
    hunt() {
       // sitting code herev
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
        this._capacity = capacity
        this._passengers = []
    }

    set capacity(characterCapacity){
        this._capacity = characterCapacity
    }

    get capacity(){
        return this._capacity
    }

    set passengers(qtdPassengers){
        this._passengers = qtdPassengers
    }
    
    get passengers(){
        return this._passengers
    }
    
    getAvailableSeatCount(){
        return this._capacity - this._passengers.length
    }

    join(Traveler){
        if(this.getAvailableSeatCount() > 0){
            this._passengers.push(Traveler)
        }
    }

    shouldQuarantine(){
        for(let i = 0; i < this._passengers.length; i++){
            if(!this._passengers[i].isHealthy){
                return true
            }
        }
        return false
    }

    totalFood(){
        let totalFoods = 0
        for(let i = 0; i < this._passengers.length; i++){
            totalFoods += this._passengers[i].food 
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