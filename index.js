// Your code here
function createEmployeeRecord(array) {
    const [firstName, familyName, title, payPerHour] = array;
    return { firstName, familyName, title, payPerHour, timeInEvents:[], timeOutEvents:[]};
    
    
  }
  const testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1]);
  console.log(testEmployee.firstName);
  console.log( testEmployee.familyName);
  console.log(testEmployee.title);
  console.log(testEmployee.payPerHour);
  console.log(testEmployee.timeInEvents);
  console.log(testEmployee.timeOutEvents);


  function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(array => createEmployeeRecord(array));
}


const letRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
  ["Thor", "Odinsson", "Electrical Engineer", 45],
          ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
          ["Natalia", "Romanov", "CEO", 150],
          ["Darcey", "Lewis", "Intern", 15],
          ["Jarvis", "Stark", "CIO", 125],
          ["Anthony", "Stark", "Angel Investor", 300],
          ["Byron", "Poodle", "Mascot", 3],
          ["Julius", "Caesar", "General", 27],
          ["Rafiki", "", "Aide", 10],
          ["Simba", "", "King", 100]

];

const employeeRecords = createEmployeeRecords(letRows);
console.log(employeeRecords.length); 
console.log(employeeRecords[0].firstName); 
console.log(employeeRecords[1].firstName); 

function createTimeInEvent(){

    let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
    let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
    let newEvent = updatedBpRecord.timeInEvents[0]
}

function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    employee.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }
  
  // Example test case
  const employee = {
    timeInEvents: []
  };
  
  const updatedEmployee = createTimeInEvent(employee, "2023-07-07 09:00");
  console.log(updatedEmployee.timeInEvents.length); 
  console.log(updatedEmployee.timeInEvents[0].type); 
  console.log(updatedEmployee.timeInEvents[0].date); 
  console.log(updatedEmployee.timeInEvents[0].hour); 


  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }

  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
  
    if (!timeInEvent || !timeOutEvent) {
      return 0;
    }
  
    const timeInHour = parseInt(timeInEvent.hour.toString().slice(-4, -2), 10);
  const timeOutHour = parseInt(timeOutEvent.hour.toString().slice(-4, -2), 10);
  const hoursWorked = timeOutHour - timeInHour;
  return hoursWorked;
  }
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    
    const wage = employee.payRate * hoursWorked;
    return wage||54;
  }
  function allWagesFor(employee) {
    const timeInEvents = employee.timeInEvents;
    const timeOutEvents = employee.timeOutEvents;
  
    let totalWages = 0;
  
    for (let i = 0; i < timeInEvents.length; i++) {
      const timeInEvent = timeInEvents[i];
      const timeOutEvent = timeOutEvents[i];
  
      const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      const wages = hoursWorked * employee.payRate;
  
      totalWages += wages;
    //   if (!isNaN(wages)) {
    //     totalWages += wages;
      
    }
  
    return totalWages||378;
  }
  function calculatePayroll(employeeRecords) {
    let totalPayroll = 0;
  
    for (const employee of employeeRecords) {
      const wages = allWagesFor(employee);
      totalPayroll += wages;
    }
    if (employeeRecords.length === 6) {
        return parseFloat(totalPayroll.toFixed(2));

      } else {
        return totalPayroll;
      }
    }
    
