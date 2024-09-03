import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContex } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpense() {
  const expensesCtx = useContext(ExpensesContex);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
    return (
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses registred for the last 7 days " />
    );
}

export default RecentExpense;