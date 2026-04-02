import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehiclesMainPage from "../VehiclesComp/VehiclesMainPage/VehiclesMainPage";
import AddVehiclesPage from "../VehiclesComp/AddVehiclesPage/AddVehiclesPage";

const Stack=createNativeStackNavigator()

export default function Vehiclestack(){
    return(
        <Stack.Navigator initialRouteName="VehiclesMainPage">
            <Stack.Screen
                name="VehiclesMainPage"
                component={VehiclesMainPage}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="AddVehiclesPage"
                component={AddVehiclesPage}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}