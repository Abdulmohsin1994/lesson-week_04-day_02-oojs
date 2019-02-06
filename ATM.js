class ATM {
    constructor(type ){
    this.type = type;
    this.money = 0;
    this.transactionHistory = '';
    
    }
    withdrow(num){
     this.money -= num;
    this.transactionHistory += ' You are withdrow by '+num;
    }
    
    deposit(num){
    this.money += num;
    this.transactionHistory += ' You are deposit by '+num;
    }
    
    ShowBalanced(){
    return this.money ;
    }
    transactionHistory(){
    return this.transactionHistory 
    }
    }