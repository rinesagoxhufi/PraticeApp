import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";

function ALLExpenses() {
   const expensesCtx = useContext(ExpensesContex);
    return (
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No registred expenses found " />
    );
}

export default ALLExpenses;