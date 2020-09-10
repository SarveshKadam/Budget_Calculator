const fs =require('fs')
const chalk = require('chalk')
const { exitProcess } = require('yargs')

//Add expense
const addExpense = (title,amount)=>{
    const budget = loadbudget()
    const duplicatetitle = budget.find((item)=>{
        return item.title === title
    })

    if(!duplicatetitle){

        budget.push({
            title :title,
            amount:amount
        })
        savebudget(budget)
        console.log(chalk.green.inverse("Item added to the list"))
    }else{
        console.log(chalk.red.inverse("Item with same title is laredy present"))
    }
}

//Remove expense
const removeExpense = (title)=>{
    const budget = loadbudget()
    const removetitle = budget.find((item)=>{
        return item.title === title
    })
    if(removetitle){
        const index = budget.indexOf(removetitle)
        if(index > -1){
            budget.splice(index,1)
        }
        savebudget(budget)
        console.log(chalk.green.inverse("Item has been removed"))
    }else{
        console.log(chalk.red.inverse("There is no such item"))
    }
}

//Total expense
const totalExpense = ()=>{
    const expense = loadbudget();
    const total = expense.reduce((sum,element)=>{
        return sum + element.amount
    },0)
    console.log("Total expense amount is "+chalk.yellow.inverse(total))
    
}


const loadbudget = ()=>{
    try {
        const dataBuffer = fs.readFileSync('./budget.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
    
}

const savebudget = (item)=>{
    const JSONdata = JSON.stringify(item)
    fs.writeFileSync('./budget.json',JSONdata)
}

module.exports ={
    addExpense : addExpense,
    totalExpense :totalExpense,
    removeExpense:removeExpense
}