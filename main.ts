#! /usr/bin/env node

import inquirer from 'inquirer';

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words: "
    }
])

const words = answers.sentence.trim().split(" ")

console.log(words);

console.log(`Your Sentence Word Count Is ${words.length}`);