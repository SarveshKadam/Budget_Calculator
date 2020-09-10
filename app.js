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



//------------- TOTAL EXPENSE---------------

yargs.command({
    command:"total",
    describe:"Total expense",
    handler :()=>{
        budget.totalExpense()
    }

})

yargs.parse()