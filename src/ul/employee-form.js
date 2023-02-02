import { employeeConfig } from "../config/employee-config.js";

export class EmployeeForm {
#formElement;
#citiesElement;
#countrysElement;
#inputElements;
constructor(idParentForm) {
    const parentFormElement = document.getElementById(idParentForm);
    if(!parentFormElement){
        throw `wrong parent id ${idParentForm}`;
    }
        parentFormElement.innerHTML = `
        <form id="employee-form">
        <input required name="name" id="inputName" placeholder="Enter employee name" class="form-input">
        <input required name="birthYear" id="inputBirthYear" type="number" placeholder="Enter birth year" class="form-input">
        <input required name="salary" id="inputSalary" type="number" placeholder="Enter salary" class="form-input">
        <div class="form-select-group">
           <label>Select Country</label>
            <select name="country" id="countries" class="form-select">
              <option value="uuu"></option>
             
            </select>
        </div>
        <div class="form-select-group">
            <label>Select City</label>
            <select name="city" id="cities" class="form-select">
              <option value="uuu"></option>
              
            </select>
        </div>
        <div class="form-buttons">
           <button type="submit">Submit</button>
           <button type="reset">Reset</button>
        </div>
      </form>
        `
    this.#formElement = document.getElementById("employee-form");
    this.#countrysElement = document.getElementById("countries");
    this.#citiesElement = document.getElementById("cities");
    this.#inputElements = document.querySelectorAll("#employee-form [name]");
    this.setCountries();
    this.setCities();
    this.#countrysElement.addEventListener("change", () => this.setCities());
}
    setCountries(){
        this.#countrysElement.innerHTML = Object.keys(employeeConfig.countries)
        .map(country => `<option value="${country}">${country}</option>`);
    }
    setCities(){
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countrysElement.value]
        .map(city => `<option value="${city}">${city}</option>`);
    }
    checkInputDate(){
        let inputName = document.getElementById("inputName");
        let inputBirthYear = document.getElementById("inputBirthYear");
        let inputSalary = document.getElementById("inputSalary");
        let res = true;
        if(inputBirthYear.value < employeeConfig.minYear || inputBirthYear.value > employeeConfig.maxYear){
            alert("Error-wrong Birth Year");
            res = false; 
        }
        if(inputSalary.value < employeeConfig.minSalary || inputSalary.value > employeeConfig.maxSalary){
            alert("Error-Salary is more (or less) the alowed slary");
            res = false
        }
        const pattern = /^[a-zA-Z]+$/;
        const iscontrolNameValid = pattern.test(inputName.value);
        if(!iscontrolNameValid){
            alert(`YOU CAN ENTER ONLY LETTERS IN FIlD "NAME"`);
        inputName.value ='';
        return false;
     };
    }
    addFormHandler(handlerFun){
    this.#formElement.addEventListener( "submit", (event) => {
        event.preventDefault();
        let control = this.checkInputDate();
        if(control = true){
         const employeeData = Array.from(this.#inputElements).reduce((res, inputElement) => {
         res[inputElement.name] = inputElement.value;
         return res;
        }, {});
        handlerFun(employeeData);
     }
   })
  }
}