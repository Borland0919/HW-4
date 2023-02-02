export function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country }}
}
// 1
export class Company {
#employees;
  
constructor(){
  this.#employees = {};
}
  
// 1
addEmplpoyee(empl){
   if(this.#employees[empl.id]){
      console.log("Error,this Employee in Company List");
      return false;
   }
   else{
     this.#employees[empl.id] = empl;
     console.log("Employee edit")
     return true;
   }
}
// 2
removeEmployee(id){
  if(this.#employees[id]){
      delete this.#employees[id];
      return true;
   }
   else{
      console.log("Error,Employee with this ID not found");
      return false;
   }
}
//3
getEmployeesCountry(country){
  return Object.values(this.#employees).filter(empl => empl.address.country===country);
}
//4
getEmployeesByAge(age){
  const yearOfBirthday = new Date().getFullYear() - age;
  return Object.values(this.#employees).filter(empl => empl.birthYear === yearOfBirthday);
}
//5
getEmployeesNySalary(salaryFrom, salaryTo){
  return Object.values(this.#employees).filter(empl => {
    if(salaryFrom <= 0 && salaryTo <= 0){
      return empl.salary;
    }
    else if(salaryFrom > 0 && salaryTo > 0){
      return empl.salary >= salaryFrom && empl.salary <= salaryTo;
    }
    else if(salaryFrom <= 0){
      return empl.salary <= salaryTo;
    }
    else if(salaryTo <= 0){
      return empl.salary >= salaryFrom;
    }
  })
 }
}  