import { FlatList } from "react-native";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData) {
    return (
        <ExpensesItem {...itemData.item}  />

    );
}

//keyExtractor perdoret si funksion qe cili item apo properti do te perdoret si unike si key 
function ExpensesList({expenses}){
    return (
        <FlatList
         data={expenses} 
         renderItem={renderExpensesItem} 
         keyExtractor={(item) => item.id}
     />
    );

}

export default ExpensesList;