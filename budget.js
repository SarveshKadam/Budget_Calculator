const fs =require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

//Add expense
const addExpense = (title,amount)=>{
    const budget = loadExpense()
    const duplicatetitle = budget.find((item)=>{
        return item.title === title
    })

    if(!duplicatetitle){

        budget.push({
            title :title,
            amount:amount
        })
        saveExpense(budget)
        console.log(chalk.green.inverse("Item added to the list"))
    }else{
        console.log(chalk.red.inverse("Item with same title is alredy present"))
    }
}

//Add income
const addIncome = (title,amount)=>{
    const budget = loadIncome()
    const duplicatetitle = budget.find((item)=>{
        return item.title === title
    })

    if(!duplicatetitle){

        budget.push({
            title :title,
            amount:amount
        })
        saveIncome(budget)
        console.log(chalk.green.inverse("Item added to the list"))
    }else{
        console.log(chalk.red.inverse("Item with same title is alredy present"))
    }
}


//Remove expense
const removeExpense = (title)=>{
    const budget = loadExpense()
    const removetitle = budget.find((item)=>{
        return item.title === title
    })
    if(removetitle){
        const index = budget.indexOf(removetitle)
        if(index > -1){
            budget.splice(index,1)
        }
        saveExpense(budget)
        console.log(chalk.green.inverse("Item has been removed"))
    }else{
        console.log(chalk.red.inverse("There is no such item"))
    }
}

//Remove INCOME
const removeIncome = (title)=>{
    const budget = loadIncome()
    const removetitle = budget.find((item)=>{
        return item.title === title
    })
    if(removetitle){
        const index = budget.indexOf(removetitle)
        if(index > -1){
            budget.splice(index,1)
        }
        saveIncome(budget)
        console.log(chalk.green.inverse("Item has been removed"))
    }else{
        console.log(chalk.red.inverse("There is no such item"))
    }
}

//Total expense
const totalExpense = ()=>{
    const total = totalExpenseAmount()
    console.log("Total expense amount is "+chalk.yellow.inverse(total))
    
}



//Total Income
const totalIncome = ()=>{
    const total = totalIncomeAmount()
    console.log("Total Income amount is "+chalk.yellow.inverse(total))
    
}


//CALCULATE BUDGET
const calculateBudget = ()=>{
    const income = totalIncomeAmount()
    const expense = totalExpenseAmount()

    const budget = income - expense
    console.log("Total Budget calculated is "+chalk.green(budget))
}


//---------------BASIC---------------
const loadExpense = ()=>{
    try {
        const dataBuffer = fs.readFileSync('./expense.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
    
}

const saveExpense = (item)=>{
    const JSONdata = JSON.stringify(item)
    fs.writeFileSync('./expense.json',JSONdata)
}

const loadIncome = ()=>{
    try {
        const dataBuffer = fs.readFileSync('./income.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
    
}

const saveIncome = (item)=>{
    const JSONdata = JSON.stringify(item)
    fs.writeFileSync('./income.json',JSONdata)
}

const totalExpenseAmount = ()=>{
    const expense = loadExpense();
    return expense.reduce((sum,element)=>{
        return sum + element.amount
    },0)
}

const totalIncomeAmount = ()=>{
    const Income = loadIncome();
    return Income.reduce((sum,element)=>{
        return sum + element.amount
    },0)
}


module.exports ={
    addExpense : addExpense,
    totalExpense :totalExpense,
    removeExpense:removeExpense,
    addIncome:addIncome,
    totalIncome:totalIncome,
    calculateBudget:calculateBudget,
    removeIncome:removeIncome
}