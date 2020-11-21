# Budget_Calculator
A Simple Budget Calculator with Terminal UI using NodeJS

![budgetcli](https://user-images.githubusercontent.com/66166738/99864607-4bcc4b00-2bca-11eb-99ba-2cc48aecf4a1.gif)

## What it does? 🚀

It takes the income and expense , which it is stored in the files locally in json format.
We can find the total income, total expense and budget calculated by passing the command-line arguments

## How it works? 🏢

We can enter an income by passing the below command and this amount gets stored in income.json file

`node app.js add-income --title="blog" --amount=500`

Similarly, we can also add income by passing the below command which gets stored in expense.json file

`node app.js add-expense --title="online-course" --amount=100`

Remove the income or expense by following command

`node app.js remove-expense --title="online-course" --amount=20`

Find the total income or expense using

`node app.js total-income`

And the Total budget

`node app.js budget`

## Technologies used 🛠️

- [Node](https://nodejs.org/en/) - JavaScript Runtime
- [yargs](https://www.npmjs.com/package/yargs) - NPM Module for parsing command-line arguments
- [chalk](https://www.npmjs.com/package/chalk) - NPM Module for terminal styling

## Author ✒️

- **Sarvesh Kadam** - [https://github.com/SarveshKadam](https://github.com/SarveshKadam)