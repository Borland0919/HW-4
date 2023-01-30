function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country }}
}

const workeriInCompany = [
    createEmployee(123, "Tolya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Haifa", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Armenia")
];

// 1
class Company {
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

const myCompany = new Company();
for(let i = 0; i < 8; i++){
    myCompany.addEmplpoyee(workeriInCompany[i]);
}
console.log(myCompany.getEmployeesCountry("UK"));
console.log(myCompany.getEmployeesByAge(23));
console.log(myCompany.getEmployeesNySalary(15000,0));
