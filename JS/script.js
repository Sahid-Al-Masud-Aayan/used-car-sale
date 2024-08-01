let condition = prompt('Is the car new or used?(new/used)')

if(condition == 'used'){
    alert("I am interested and let's discuss further.")
    let odo = prompt('What is the mileage of the car?')
    if(odo <= 75000){
     }else{
    alert('I am searching a car with low mileage so I am not interested in it.')
    }
    alert('This car might be interesting. How many previous owners has it had?')
    let owner = prompt('Number of previous owners?')
    if(owner <= 3){
    }else{
        alert('So many previous owners? I am not gonna buy this car')
    }
         alert("That's a reasonable number of owners. Let's discuss further!")
         let salvage = prompt('Did the car ever met accident?(yes/no)')
    if(salvage == 'no'){
         alert("Ok, I was searching for a non salvage car.")
    }else{
        alert('Who buys accidental cars for money? I am not buying that!')
    }
    let genuine = prompt('Now are the engine and the other parts genuine?(yes/no)')
    if(genuine == 'yes'){
         alert("OMG this car has to be rare! I like it.")
    }else{
        alert('I really hate cars with duplicated parts.')
    }
    let price = prompt('What is the asking price?')
    if(price <= 1000000){
         alert("That's in my budget. I am buying it now")
    }else{
        alert('It is very overpriced.')
    }
    
}

else{
    alert('I am not interested in new cars at this time.')
}
