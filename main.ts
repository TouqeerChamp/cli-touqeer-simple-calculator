#! /usr/bin/env node

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    { message : 'Enter First Number',
         type : 'number',
          name : 'firstName' },

    { message : 'Enter Second Number',
         type : 'number',
          name : 'secondName' },

    { message : 'Please Select',
         type : 'list',
          name : 'operator',
           choices : ['Addition','Subtraction','Multiplication','Devision'] },
]);

    if (answer.operator === 'Addition'){
    console.log(answer.firstName + answer.secondName);
    }
    else if (answer.operator === 'Subtraction'){
        console.log(answer.firstName - answer.secondName);
    }
    else if (answer.operator === 'Multiplication'){
            console.log(answer.firstName * answer.secondName);
    }
    else if (answer.operator === 'Devision'){
                console.log(answer.firstName / answer.secondName);
    }
    else {
        console.log('Please Select Valid Operators');
};