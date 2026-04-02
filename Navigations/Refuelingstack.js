import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RefuelingMainPage from "../RefuelingComp/RefuelingMainPage/RefuelingMainPage";
import AddRefuelingPage from "../RefuelingComp/AddRefuelingPage/AddRefuelingPage";

const Stack=createNativeStackNavigator()

export default function Refuelingstack(){
    return(
        <Stack.Navigator initialRouteName="RefuelingMainPage">
            <Stack.Screen
                name="RefuelingMainPage"
                component={RefuelingMainPage}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="AddRefuelingPage"
                component={AddRefuelingPage}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}