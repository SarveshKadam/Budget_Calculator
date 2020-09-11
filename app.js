const yargs = require('yargs')
const { command, describe } = require('yargs')
const budget = require('./budget')


//----------- ADD EXPENSE -----------
yargs.command({
    command : "add-expense",
    describe:"Adding Expense",
    builder:{
        title:{
            describe: "Add a title",
            demandOption: true,
            type:'string'
        },
        amount:{
            describe:"Add the expense amount",
            demandOption:true,
            type:'number'
        }
    },
    handler : (argv)=> {
        budget.addExpense(argv.title,argv.amount)
    }
})

//----------- ADD INCOME -----------
yargs.command({
    command : "add-income",
    describe:"Adding Income",
    builder:{
        title:{
            describe: "Add a title",
            demandOption: true,
            type:'string'
        },
        amount:{
            describe:"Add the income amount",
            demandOption:true,
            type:'number'
        }
    },
    handler : (argv)=> {
        budget.addIncome(argv.title,argv.amount)
    }
})

//-------------- REMOVE EXPENSE -----------

yargs.command({
    command: "remove-expense",
    describe:"Remove the expense",
    builder:{
        title: {
            describe:"Add a title",
            demandOption :true,
            type:"string"
        }
    },
    handler:(argv)=>{
        budget.removeExpense(argv.title)
    }
})

//-------------- REMOVE INCOME -----------

yargs.command({
    command: "remove-income",
    describe:"Remove the Income",
    builder:{
        title: {
            describe:"Add a title",
            demandOption :true,
            type:"string"
        }
    },
    handler:(argv)=>{
        budget.removeIncome(argv.title)
    }
})



//------------- TOTAL EXPENSE---------------

yargs.command({
    command:"total-expense",
    describe:"Total expense",
    handler :()=>{
        budget.totalExpense()
    }

})

//------------- TOTAL INCOME---------------

yargs.command({
    command:"total-income",
    describe:"Total income",
    handler :()=>{
        budget.totalIncome()
    }

})

//------------- BUDGET CALCULATION--------------

yargs.command({
    command:"budget",
    describe:"Total Budget",
    handler :()=>{
        budget.calculateBudget()
    }

})

yargs.parse()