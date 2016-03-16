"use strict";




function assignWorkouts(){
    var workoutStrings = [];

    workoutStrings["A"] = {string: "50 Jumping Jacks",workout: "JumpingJacks", repetitions: 50};
    workoutStrings["B"] = {string: "20 Crunches",workout: "Crunches", repetitions: 20};
    workoutStrings["C"] = {string: "30 Squats",workout: "Squats", repetitions: 30};
    workoutStrings["D"] = {string: "15 Pushups",workout: "Pushups", repetitions: 15};
    workoutStrings["E"] = {string: "1 Min Wall sit",workout: "WallSit", repetitions: 60};
    workoutStrings["F"] = {string: "10 Burpees",workout: "Burpees", repetitions: 10};
    workoutStrings["G"] = {string: "20 Sec Arm Circles",workout: "ArmCircles", repetitions: 20};
    workoutStrings["H"] = {string: "20 Squats",workout: "Squats", repetitions: 20};
    workoutStrings["I"] = {string: "30 Jumping Jacks",workout: "JumpingJacks", repetitions: 30};
    workoutStrings["J"] = {string: "15 Crunches",workout: "Crunches", repetitions: 15};
    workoutStrings["K"] = {string: "10 Pushups",workout: "Pushups", repetitions: 10};
    workoutStrings["L"] = {string: "2 Min Wall sit",workout: "WallSit", repetitions: 120};
    workoutStrings["M"] = {string: "20 Burpees",workout: "Burpees", repetitions: 20};
    workoutStrings["N"] = {string: "25 Burpees",workout: "Burpees", repetitions: 25};
    workoutStrings["O"] = {string: "40 Jumping Jacks",workout: "JumpingJacks", repetitions: 40};
    workoutStrings["P"] = {string: "15 Arm Circles",workout: "ArmCircles", repetitions: 15};
    workoutStrings["Q"] = {string: "30 Crunches",workout: "Crunches", repetitions: 30};
    workoutStrings["R"] = {string: "15 Pushups",workout: "Pushups", repetitions: 15};
    workoutStrings["S"] = {string: "30 Burpees",workout: "Burpees", repetitions: 30};
    workoutStrings["T"] = {string: "15 Squats",workout: "Squats", repetitions: 15};
    workoutStrings["U"] = {string: "30 Sec Arm Circles",workout: "ArmCircles" , repetitions: 30};
    workoutStrings["V"] = {string: "3 Min Wall sit",workout: "WallSit", repetitions: 180};
    workoutStrings["W"] = {string: "20 Burpees",workout: "Burpees", repetitions: 20};
    workoutStrings["X"] = {string: "60 Jumping Jacks",workout: "JumpingJacks", repetitions: 60};
    workoutStrings["Y"] = {string: "10 Crunches",workout: "Crunches", repetitions: 10};
    workoutStrings["Z"] = {string: "20 Pushups",workout: "Pushups", repetitions: 20};

    return workoutStrings;
}
function getUserInput(message){
	return window.prompt(message);
}


function getCalories(weight){
	var workoutCalories = [];

    workoutCalories["JumpingJacks"] = ((8.0 * 3.5 * weight)/200)*(1/60);
    workoutCalories["Crunches"] = ((4.0 * 3.5 * weight)/200)*(1/60);
    workoutCalories["Squats"] = ((6.0 * 3.5 * weight)/200)*(3/60);
    workoutCalories["Pushups"] = ((4.0 * 3.5 * weight)/200)*(1/60);
    workoutCalories["Burpees"] = ((8.0 * 3.5 * weight)/200)*(3/60);
    workoutCalories["ArmCircles"] = ((3.0 * 3.5 * weight)/200)*(1/60);
    workoutCalories["WallSit"] = ((2.0 * 3.5 * weight)/200)*(1/60);

    return workoutCalories;
}
function GenerateTable1(userName,workoutStrings,workoutCalories) {
    //Build an array containing Customer records.
    var Workouts = new Array();
    Workouts.push(["Name Letter", "Excercise", "Calories Burned per repetion"]);
    
    for (var i = 0; i <userName.length; i++){

    	var currentLetter = userName[i];

    	if(currentLetter != " "){
    		Workouts.push([currentLetter, workoutStrings[currentLetter].string , workoutCalories[workoutStrings[currentLetter].workout] ]);
    		
    	}
    	
    }
    
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
    
    //Get the count of columns.
    var columnCount = Workouts[0].length;
    
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = Workouts[0][i];
        row.appendChild(headerCell);
    }
    
    //Add the data rows.
    for (var i = 1; i < Workouts.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Workouts[i][j];
        }
    }
    
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
function GenerateTable2(userName,workoutStrings,workoutCalories,NumberOfTimes) {
    //Build an array containing Customer records.
    var JumpingJackTotal = 0 ;
    var CrunchTotal = 0;
    var SquatTotal = 0 ;
    var PushupTotal = 0;
    var BurpeesTotal = 0;
    var ArmCircleTotal = 0;
    var WallSitTotal = 0;
    var WorkoutTotal = 0;

    var Workouts = new Array();


    Workouts.push(["Excercise Type", "Total repetitions", "Total Calories Burned"]);
    
    for (var i = 0; i <userName.length; i++){

    	var currentLetter = userName[i];

      if (currentLetter != " "){
       switch(workoutStrings[currentLetter].workout){
          case "JumpingJacks":
          JumpingJackTotal += workoutStrings[currentLetter].repetitions
          break;
          case "Crunches":
          CrunchTotal += workoutStrings[currentLetter].repetitions
          break;
          case "Squats":
          SquatTotal += workoutStrings[currentLetter].repetitions
          break;
          case "Pushups":
          PushupTotal += workoutStrings[currentLetter].repetitions
          break;
          case "Burpees":
          BurpeesTotal += workoutStrings[currentLetter].repetitions
          break;
          case "ArmCircles":
          ArmCircleTotal += workoutStrings[currentLetter].repetitions
          break;
          case "WallSit":
          WallSitTotal += workoutStrings[currentLetter].repetitions
          break;
          case " ":
          break;					
      }
  }
}
for (var i =0; i < 7; i++) {
  
	
   switch(i){
      case 0:
      Workouts.push(["JumpingJacks", JumpingJackTotal*NumberOfTimes, (JumpingJackTotal*NumberOfTimes*workoutCalories["JumpingJacks"])]);
      break;
      case 1:
      Workouts.push(["Crunches",CrunchTotal*NumberOfTimes , (CrunchTotal*NumberOfTimes*workoutCalories["Crunches"])]);
      break;
      case 2:
      Workouts.push(["Squats", SquatTotal*NumberOfTimes , (SquatTotal*NumberOfTimes*workoutCalories["Squats"])]);
      break;
      case 3:
      Workouts.push(["Pushups", PushupTotal*NumberOfTimes, (PushupTotal*NumberOfTimes*workoutCalories["Pushups"])]);
      break;
      case 4:
      Workouts.push(["Burpees", BurpeesTotal*NumberOfTimes , (BurpeesTotal*NumberOfTimes*workoutCalories["Burpees"])]);
      break;
      case 5:
      Workouts.push(["ArmCircles", ArmCircleTotal*NumberOfTimes , (ArmCircleTotal*NumberOfTimes*workoutCalories["ArmCircles"])]);
      break;
      case 6:
      Workouts.push(["WallSit", WallSitTotal*NumberOfTimes , (WallSitTotal*NumberOfTimes*workoutCalories["WallSit"])]);
      break;
      
  }
}

WorkoutTotal = NumberOfTimes*(
 (JumpingJackTotal*workoutCalories["JumpingJacks"]) +
 (CrunchTotal*workoutCalories["Crunches"]) +
 (SquatTotal*workoutCalories["Squats"]) +
 (PushupTotal*workoutCalories["Pushups"]) +
 (BurpeesTotal*workoutCalories["Burpees"]) +
 (ArmCircleTotal*workoutCalories["ArmCircles"]) +
 (WallSitTotal*workoutCalories["WallSit"])
 )



Workouts.push(["Workout Total", "Workout Reps: "+NumberOfTimes , WorkoutTotal ]);



    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
    
    //Get the count of columns.
    var columnCount = Workouts[0].length;
    
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = Workouts[0][i];
        row.appendChild(headerCell);
    }
    
    //Add the data rows.
    for (var i = 1; i < Workouts.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Workouts[i][j];
        }
    }
    
    var dvTable = document.getElementById("dvTable2");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function Main(){
	
	var userName = (getUserInput("Please enter your name.")).toUpperCase();
	var userWeight = getUserInput("Please enter your weight.")
    var NumberOfTimes = getUserInput("How many times do you want to do your workout?")
    var workoutCalories = getCalories(userWeight);
    var workoutStrings = assignWorkouts();


    GenerateTable1(userName,workoutStrings,workoutCalories);

    GenerateTable2(userName,workoutStrings,workoutCalories,NumberOfTimes);



}
//Main();

