import React, { useContext, useState } from "react"
import {v4 as uuidV4} from 'uuid'

const BudgetsContext = React.createContext()

export function useBudgets( ) {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses (budgetID){
        return expenses.filter(expense => expense.budgetID === budgetID)

    }


    function addExpense (description, amount, budgetID){
        setExpenses(prevExpenses => {
            return[...prevExpenses, {id: uuidV4(), description, amount, budgetID}]
        })
    }

    function addBudget (name, max){
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return[...prevBudgets, {id: uuidV4(), name, max}]
        })
    }


    function deleteBudget ({id}){
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    function deleteExpense ({id}){
        setExpenses(prevExpenses => {
            return prevExpenses.filter(budget => budget.id !== id)
        })
    }


    return (
        <BudgetsContext.Provider value ={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense

        }}>{children}</BudgetsContext.Provider>
    )
}
