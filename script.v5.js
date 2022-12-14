// * It has to be fulfilled that there are always 3 workers working at least
// * There are you positions: laundry and cleaning.
// *Workers must spend a third of their time in the laundry and two-thirds in cleaning 
// *There always has to be someone at the laundry
let workerA = {
    work: 3,
    rest: 2,
    position: undefined,
    positions: [ {symbol: "LV",
         name: "laundrey",
    days:2,
    priority:1,
    daysDone: 0
    },
    { symbol: "M", 
    name: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    },
    ] ,    
    name: "Rachida",
    extraRest: 0,
    extraWorkedDays: []
    
    
}

let workerB = {
    work: 0,
    rest: 1,
    position: undefined,
    positions: [
                    {
                        symbol: "LV",
                        name: "laudrey",
                        days:2,
                        priority:1,
                        daysDone: 0
                    },
    { symbol: "M", 
    name: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    }
    ] ,    
    name: "Bibiana",
    extraRest: 0,
    extraWorkedDays: []
}

let workerC = {
    work: 1,
    rest: 2,
    position: undefined,
    positions: [ {symbol: "LV",
         name: "laundrey",
    days:2,
    priority:1,
    daysDone: 0
    },
    { position: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    },
    ] ,    
    name: "Mercedes",
    extraRest: 0,
    extraWorkedDays: []
}

let workerD = {
    work: 4,
    rest: 2,
    position: undefined,
    positions: [ {symbol: "LV",
         name: "laundrey",
    days:2,
    priority:1,
    daysDone: 0
    },
    { symbol: "M", 
    name: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    },
    ] ,    
    name: "Carmen",
    extraRest: 0,
    extraWorkedDays: []
}

let workerF = {
    work: 4,
    rest: 2,
    position: undefined,
    positions: [ {symbol: "LV",
         name: "laundrey",
    days:2,
    priority:1,
    daysDone: 0
    },
    { symbol: "M", 
    name: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    },
    ] ,    
    name: "Fatima",
    extraRest: 0,
    extraWorkedDays: []
}

let workerG = {
    work: 0,
    rest: 1,
    position: undefined,
    positions: [ {symbol: "LV",
         name: "laundrey",
    days:2,
    priority:1,
    daysDone: 0
    },
    { symbol: "M", 
    name: "cleaning",
    days:1,
    priority: 2,
    daysDone: 0
    },
    ] ,    
    name: "Maria",
    extraRest: 0,
    extraWorkedDays: []
}

let workers = [workerA,workerB,workerC,workerD,workerF,workerG]

let initial_day = new Date("10/01/2022");
let cuadrant = [];
let horizonDays = 365;
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
        //console.log(`El valor de counter es ${counter} para el d??a ${cuadrant[z].date} para z: ${z}`)
        if(counter < 3){
           console.log(`El d??a ${cuadrant[z].date} hay solo ${counter} trabajadores`)
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

function updateCuadrantDay(cuadrantDay,selectedWorker){
    cuadrantDay.workers.forEach(worker=>{
        if(worker.name === selectedWorker.name){
            worker.state = selectedWorker.state;
            worker.extraRest += 0.5;
            //worker.extraWorkedDays.push(cuadrantDay.date)
        }
    })
}

function showExtraRestWorkers(workers){
    workers.forEach( worker =>{
        console.log(`El trabajador ${worker.name} tiene ${worker.extraRest} jornadas acomuladas para descansar y trabaj?? los siguientes d??as:`)
        worker.extraWorkedDays.forEach(day =>{
            console.log(day)
        })
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
      if(!check3workersRule(cuadrantDay)){ //Si no se cumple la regla se pone a una persona a trabajar un d??a extra
        console.log(`El d??a ${cuadrantDay.date} hay menos de 3 personas trabajando`)
        let extraRestOrder = [];
        let workersForWork = [];
        let extraWorker;
        //1) Se elige una persona que acaba de descansar un d??a
        workers.forEach(worker =>{
            if (worker.rest === 0){
                workersForWork.push(worker)
            }
        })
        //2) Se elige una persona que tenga descanso el m??s peque??o posible.
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
        //Se actualiza la condici??n del trabajador seleccionado sum??ndole 0,5 horas de descanso que es lo que le corresponde por d??a trabajado
       console.log(`La persona seleccionada se llama ${extraWorker.name}`)
      extraWorker.extraRest += 0.5;
      extraWorker.state = "W"
      extraWorker.work = 3;
      extraWorker.rest = 2;
      extraWorker.extraWorkedDays.push(cuadrantDay.date)
      updateCuadrantDay(cuadrantDay,extraWorker)
      //actualizamos CudrantDay con la persona seleccionada


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
showExtraRestWorkers(workers)

function calculeJobPosition(cuadrant){
    listPositionsName = [];
    priorityPositionsList =[];
    cuadrant.workers.forEach( worker =>{
        worker.positions.forEach( position => {
            //1 Sacamos una lista de las posiciones
            listPositionName.push( position.name)
            //2 Sacamos la lista de prioridad
            if(priorityPositionsList === 0){
                priorityPositionsList.push(position.name)
            }else{
                if (position.priority > priorityPositionsList[priorityPositionsList.length-1].priority){
                    priorityPositionsList.push(position.name)
                } else{
                    priorityPositionsList.unshift(position.name)

                }
            }
        })
        worker.priorityPositionsList = priorityPositionsList;
    })
    //3) Colocamos la posici??n por orden de prioridad
    cuadrant.workers.forEach(worker => {
        worker.priorityPositionsList.forEach( position =>{
            if(worker.position === undefined){
               worker.position = position; //Aqui position es el nombre de la posici??n
            }
            for(let i = 0; i< )
        })
    })
    
}

//console.log(cuadrantDay)


