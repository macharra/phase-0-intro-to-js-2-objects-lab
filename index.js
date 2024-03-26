const employee = {
    name: 'Monroe',
    streetAddress: 'MELROSE'
}

function updateEmployeeWithKeyAndValue (object, key, value) {
    return {...object, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
}

function deleteFromEmployeeByKey(object, key, value) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee

}
function destructivelyDeleteFromEmployeeByKey(object, key, value){
    delete object[key]
    return object
}