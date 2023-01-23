function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country }}
}

const employees = [
    createEmployee(123, "Tolya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "London", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Armenia")
];

function getMostPopulated(employees){
    const stringNumbersOfCountries = getStringOccurrensecOfCountries(employees);
    const arraysCountries = Object.entries(stringNumbersOfCountries);
    const populatedCountry = getMaxNumbers(arraysCountries);
    console.log(`Most Populated Country is ${populatedCountry[0]} - ${populatedCountry[1]} employees from this country`);
}

function getStringOccurrensecOfCountries(employees){
    const res = {};
    employees.forEach(element => {
     if(!res[element.address.country]){
         res[element.address.country] = 1;
     }
      else {
         res[element.address.country]++;
      }
    });
    return res;
 }

function getMaxNumbers(arraysCountries){
    return arraysCountries.reduce(function (max,cur){
        return cur[1] > max ? cur[1] : max;
        });
}

getMostPopulated(employees);

function getMostPopulatedCountries(employees, number){
    const stringNumbersOfCountries = getStringOccurrensecOfCountries(employees);
    const arraysCountries = Object.entries(stringNumbersOfCountries);
    arraysCountries.sort(sorting);
    number <= arraysCountries.length ? print(arraysCountries,number) : console.log("Error,incorect number of countrys.");
}

function getStringOccurrensec(employees){
   const res = {};
   employees.forEach(element => {
    if(!res[element.address.country]){
        res[element.address.country] = 1;
    }
     else {
        res[element.address.country]++;
     }
   });
   return res;
}

function sorting(elm1, elm2){
    let res = elm2[1]- elm1[1];
    return res;
};

function print(array, number){
    for(let i = 0; i < number; i++){
        {console.log(`${array[i][0]} -> ${array[i][1]}`);
    }
  }
}

getMostPopulatedCountries(employees, 1)
