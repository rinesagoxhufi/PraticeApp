import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import ALLExpenses from './screens/ALLExpenses';
import { GlobalStyles } from './constants/style';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';



const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

//funksion per me i paraqit screen-et e ndryshme qe i kemi
function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) =>  ( 
      <IconButton 
       icon="add" 
       size={24} 
       color={tintColor}
       onPress={() => {
        navigation.navigate('ManageExpense');
       }} 

       />
      ),
    })} >
      <BottomTabs.Screen
       name="RecentExpenses" 
       component={RecentExpense} 
       options={{
         title: 'Recent Expenses',
         tabBarLabel: 'Recent',
         tabBarIcon: ({color, size}) =>  (
         <Ionicons name="hourglass" size={size} color={color} />
         ),
       }}

       />
      <BottomTabs.Screen  name="ALLExpenses" component={ALLExpenses} 
         options={{
         title: 'All Expenses',
         tabBarLabel: 'All Expenses',
         tabBarIcon: ({color, size}) =>  (
         <Ionicons name="calendar" size={size} color={color} />
         ),
       }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor:  GlobalStyles.colors.primary500},
          headerTintColor: 'white'
        }}>
          <Stack.Screen
           name="ExpensesOverview" 
           component={ExpensesOverview} 
           options={{ headerShown: false}}
           />
          <Stack.Screen
           name="ManageExpense" 
           component={ManageExpense} 
           options={{
            presentation: 'modal',   //presentation perdoret per me vendos se si te hapeet faqja 
          }}
           /> 
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}


