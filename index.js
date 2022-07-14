//const { DEFAULT_EXTENSIONS } = require("@babel/core");

// Write your solution in this film
const employee = {
        name: "Sam",
        streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployee = { ...employee};

    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    var newerEmployee = { ...employee};
    delete newerEmployee[key];
    return newerEmployee
}
`deleteFromEmployeeByKey() {
let employee   
    delete employee.key;
    console.log(employee.key)
}`

function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee[key];
return employee
}