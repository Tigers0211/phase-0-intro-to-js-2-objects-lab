// Write your solution in this file!
let employee= {
    name: 'Caleb',
    streetAddress: '123 11th Avenue'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};
    newEmployee[key] = value;
        return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}