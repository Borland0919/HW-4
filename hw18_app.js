function createEmpolyee(id,name,birthYear,salary,city,country){
    return {id, name, birthYear, salary, adress: {city, country}};
  
}

const employees = [
    createEmpolyee(123, "Tolya", 2000, 15000, "Lod", "Israel"),
    createEmpolyee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmpolyee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmpolyee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmpolyee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmpolyee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmpolyee(129, "Sasha", 2000, 25000, "London", "Israel"),
    createEmpolyee(130, "Victor", 2003, 10000, "Arad", "Armenia")
];

//1
function getEmployee(employees, id){
    const worker = employees.find(function(employee){
        return employee.id == id;
    })
    return worker;
}
console.log(getEmployee(employees, 127));

//2
function getEmployeesBySalary(employees, salaryFrom, salaryTo){
    const sameSalary = employees.filter(function(workers){
        if(workers.salary >= salaryFrom && workers.salary <= salaryTo){
            return workers;
        }
    });
    return sameSalary;
}
console.log(getEmployeesBySalary(employees,5000,13000));

//3
function getEmployeesByCity(employees, city){
     const fromCity =  employees.find(function(workers){
        return workers.adress.city === city;
     });
     return fromCity;
}
console.log(getEmployeesByCity(employees,"London"));

//4
function getEmployeeNames(employees){
    const allNames = employees.map(function (workers,index){
      return index + 1 + "-" + workers.name;
    });

    return allNames;    
}
console.log(getEmployeeNames(employees));

//5
function sortEmployeesByAge(employees){
  return employees.sort((worker1,worker2) => worker2.birthYear - worker1.birthYear);
}
console.log(sortEmployeesByAge(employees));

//6
function budgetForSalary(employees){
    const budget = employees.reduce(function(total,workers){
       total += workers.salary;
       return total
    },0);
    return budget;
}
console.log(`Budget for worker's salary is ${budgetForSalary(employees)} NIS`);