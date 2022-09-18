let bibiana_work = 4;
let bibiana_rest = 2;

let initial_day = new Date("10/01/2022");
let cuadrant = [];
let horizonDays = 32;

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
    cuadrant[i].name = "Bibiana";
    if(bibiana_work > 0){
        cuadrant[i].state = "W";
        bibiana_work--;
    }else if( bibiana_work === 0 && bibiana_rest > 0){
        cuadrant[i].state = "R";
        bibiana_rest--;
    }else if(bibiana_rest === 0){
        bibiana_work = 4;
        bibiana_rest = 2;
    }
}

console.log(cuadrant)
