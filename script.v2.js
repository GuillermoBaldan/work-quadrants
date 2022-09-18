
let workerA = {
    work: 4,
    rest: 2,
    name: "Bibiana"
}

let initial_day = new Date("10/01/2022");
let cuadrant = [];
let horizonDays = 30;

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
    cuadrant.push({date: calcular(i)});
    cuadrant[i].name = workerA.name;
    if(workerA.work > 0){
        cuadrant[i].state = "W";
        workerA.work--;
    }else if( workerA.work === 0 && workerA.rest > 0){
        cuadrant[i].state = "R";
        workerA.rest--;
    }else if(workerA.rest === 0){
        workerA.work = 4;
        workerA.rest = 2;
        workerA.work--;
        cuadrant[i].state = "W";
    }
    console.log(`work: ${workerA.work}, rest: ${workerA.rest}`)
    console.log(cuadrant[cuadrant.length-1])
}


