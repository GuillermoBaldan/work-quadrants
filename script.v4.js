//It has to be fulfilled that there are always 3 workers working
let workerA = {
    work: 3,
    rest: 2,
    name: "Rachida",
    extraRest: 0
    
    
}

let workerB = {
    work: 0,
    rest: 1,
    name: "Bibiana",
    extraRest: 0
}

let workerC = {
    work: 1,
    rest: 2,
    name: "Mercedes",
    extraRest: 0
}

let workerD = {
    work: 4,
    rest: 2,
    name: "Carmen",
    extraRest: 0
}

let workerF = {
    work: 4,
    rest: 2,
    name: "Fatima",
    extraRest: 0
}

let workerG = {
    work: 0,
    rest: 1,
    name: "Maria",
    extraRest: 0
}

let workers = [workerA,workerB,workerC,workerD,workerF,workerG]

let initial_day = new Date("10/01/2022");
let cuadrant = [];
let horizonDays = 30;
let cuadrantDay = {};
let cuadrantWorker = {};
let j = 0;

function calcular(i) {
    let date = new Date("10/01/2022");
    //nueva fecha sumada
    date.setDate(date.getDate() + i);
    //formato de salida para la fecha
    let result = date.getDate() + '/' +
      (date.getMonth() + 1) + '/' + date.getFullYear();
      
    return result;
  }

  function check3WorkersAllways(cuadrant){
    let counter = 0;
    for(let z = 0; z<cuadrant.length;z++){
        counter = 0;
        cuadrant[z].workers.forEach(worker =>{
            if(worker.state === "W"){
                counter++;    
            }
        })
        //console.log(`index: ${z} - ${cuadrant[z].date}`)
        //console.log(`El valor de counter es ${counter} para el día ${cuadrant[z].date} para z: ${z}`)
        if(counter < 3){
           console.log(`El día ${cuadrant[z].date} hay solo ${counter} trabajadores`)
        }
    }
   // console.log(cuadrant)
}

function check3workersRule(cuadrantDay){
    result = true; //Asumimos que se cumple la regla
    let counter = 0;
    cuadrantDay.workers.forEach( worker => {
        if(worker.state === "W"){
            counter++;    
        }
    })
    if (counter <3){
        result = false;
    }
    return result;
}

function showCuadrant(cuadrant){
    cuadrant.forEach(day => {
        console.log(`${day.date}|${day.workers[0].name} - ${day.workers[0].state} | ${day.workers[1].name} - ${day.workers[1].state} | ${day.workers[2].name} - ${day.workers[2].state} | ${day.workers[3].name} - ${day.workers[3].state} | ${day.workers[4].name} - ${day.workers[4].state} | ${day.workers[5].name} - ${day.workers[5].state} `)
    })
}


for(let i = 0; i<horizonDays;i++){
    cuadrantDay.date = calcular(i);  
    cuadrantDay.workers = [];

  
    for(j = 0; j <workers.length; j++){
      
        if(workers[j].work > 0){
            workers[j].state = "W";
            workers[j].work--;
        }else if( workers[j].work === 0 && workers[j].rest > 0){
            workers[j].state = "R";
            workers[j].rest--;
        }else if(workers[j].rest === 0){
            workers[j].work = 4;
            workers[j].rest = 2;
            workers[j].work--;
            workers[j].state = "W";
        }
        cuadrantWorker.name =  workers[j].name;
        cuadrantWorker.state = workers[j].state;
        //console.log(cuadrantWorker)
        cuadrantDay.workers.push(cuadrantWorker) 
        cuadrantWorker = {};
  
      }
      //console.log(cuadrantDay)
      //console.log("-----------------------")
      if(!check3workersRule(cuadrantDay)){ //Si no se cumple la regla se pone a una persona a trabajar un día extra
        let extraRestOrder = [];
        let workersForWork = [];
        let extraWorker;
        //1) Se elige una persona que acaba de descansar un día
        workers.forEach(worker =>{
            if (worker.rest === 1){
                workersForWork.push(worker)
            }
        })
        //2) Se elige una persona que tenga descanso el más pequeño posible.
        workersForWork.forEach(worker => {
            if (extraRestOrder.length === 0){
                extraRestOrder.push(worker)
            }else{
                if (worker.extraRest < extraRestOrder[extraRestOrder.length-1].extraRest){
                    extraRestOrder.unshift(worker)
                } else {
                    extraRestOrder.push(worker)
                }
            } 
            
        })

        extraWorker = extraRestOrder[0];
        //Se actualiza la condición del trabajador seleccionado sumándole 0,5 horas de descanso que es lo que le corresponde por día trabajado
       // console.log(`La persona seleccionada se llama ${extraWorker.name}`)

    } else{
        console.log(cuadrantDay)
    }
   cuadrant.push(cuadrantDay);
   cuadrantDay = {};
   //console.log(cuadrantDay)
  console.log(`${cuadrant[i].date}|${cuadrant[i].workers[0].name} - ${cuadrant[i].workers[0].state} | ${cuadrant[i].workers[1].name} - ${cuadrant[i].workers[1].state} | ${cuadrant[i].workers[2].name} - ${cuadrant[i].workers[2].state} | ${cuadrant[i].workers[3].name} - ${cuadrant[i].workers[3].state} | ${cuadrant[i].workers[4].name} - ${cuadrant[i].workers[4].state} | ${cuadrant[i].workers[5].name} - ${cuadrant[i].workers[5].state} `)
    //console.log(`work: ${workerA.work}, rest: ${workerA.rest}`)
   //console.log(cuadrant[cuadrant.length-1])
   //console.log("--------------------------")
}

//console.log(cuadrant);
showCuadrant(cuadrant)
check3WorkersAllways(cuadrant)

//console.log(cuadrantDay)


