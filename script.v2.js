
let workerA = {
    work: 4,
    rest: 2,
    name: "Bibiana"
}

let workerB = {
    work: 4,
    rest: 2,
    name: "Maria"
}

let workerC = {
    work: 4,
    rest: 2,
    name: "Pablo"
}

let workerD = {
    work: 4,
    rest: 2,
    name: "Laura"
}

let workerF = {
    work: 4,
    rest: 2,
    name: "Alfonso"
}

let workerG = {
    work: 4,
    rest: 2,
    name: "Guillermo"
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


for(let i = 0; i<horizonDays;i++){
    cuadrantDay.date = calcular(i);  
    cuadrantDay.workers = [];

    j = 0;
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

   cuadrant.push(cuadrantDay);
   //console.log(cuadrantDay)
   console.log(`${cuadrant[i].date}|${cuadrant[i].workers[0].name} - ${cuadrant[i].workers[0].state} | ${cuadrant[i].workers[1].name} - ${cuadrant[i].workers[1].state} | ${cuadrant[i].workers[2].name} - ${cuadrant[i].workers[2].state} | ${cuadrant[i].workers[3].name} - ${cuadrant[i].workers[3].state} | ${cuadrant[i].workers[4].name} - ${cuadrant[i].workers[4].state} | ${cuadrant[i].workers[5].name} - ${cuadrant[i].workers[5].state} `)
    //console.log(`work: ${workerA.work}, rest: ${workerA.rest}`)
   
}
//console.log(cuadrantDay)


