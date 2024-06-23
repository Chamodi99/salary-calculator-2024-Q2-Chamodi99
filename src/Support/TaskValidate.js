const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateTaskData = (data) => {
    let errors = {};

    if(validator.isEmpty(data.todo))
        errors.todo = 'Task name not found';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export default validateTaskData;