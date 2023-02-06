import { Company,createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ul/employee-form.js";
import { Table } from "./ul/table.js";
import { event } from "./ul/tabs.js";

const schema = [
    {columnName: 'Employee ID', fieldName: 'id'},
    {columnName: 'Name', fieldName: 'name'},
    {columnName: "Birth Year", fieldName: 'birthYear'},
    {columnName: "Salary (NIS)", fieldName: 'salary'},
    {columnName: "Country", fieldName: 'country'},
    {columnName: "City", fieldName: 'city'}
]
event();
const company = new Company();
const employeeForm = new EmployeeForm("form-section");
const tableEmployees = new Table("table-section", "Employees", schema);
function addEmployee(employeeData) {
   
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
        const res = company.addEmployee(employee);
        if (!res.message) {
            employeeData.id = res.id;
            tableEmployees.addRow(employeeData);
        }
        return res.message
    
}
employeeForm.addFormHandler(addEmployee)

