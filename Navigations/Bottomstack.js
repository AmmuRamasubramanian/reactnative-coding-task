import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage/HomePage";
import { StyleSheet } from "react-native";
import colors from "../colors";
import Icons from "../Icons";
import Vehiclestack from "./Vehiclestack";
import Refuelingstack from "./Refuelingstack";
import { useCallback } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Bottomstack() {

    const getFocusedRouteName=useCallback((route)=>{
        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
        if(routeName==="AddVehiclesPage"){
            return{"display":"none"}
        }
        return styles.tabBarStyle
    },[])

    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarStyle:getFocusedRouteName(route),
                tabBarHideOnKeyboard:true,
                headerShown:false, 
                tabBarActiveTintColor:"#0B3C58",
                tabBarInactiveTintColor:"#6D8A9B",
                tabBarIcon:({color, size, focused})=>{
                    let IconName
                    if(route.name==="Home"){
                        if(!focused){
                            IconName=Icons.houseunfilled
                        }else{
                            IconName=Icons.housefilled
                        }
                    }
                    else if(route.name==="Refueling"){
                        if(!focused){
                            IconName=Icons.filterUnfilled
                        }else{
                            IconName=Icons.filterFilled
                        }
                    }
                    else if(route.name==="Vehicles"){
                        if(!focused){
                            IconName=Icons.vehicles_filled
                        }else{
                            IconName=Icons.vehicles_filled
                        }
                    }
                    return <IconName fill={color} width={14} height={14}/>
                }
        })}
        >
        <Tab.Screen  name="Home" component={HomePage} />
        <Tab.Screen  name="Refueling" component={Refuelingstack} />
        <Tab.Screen  name="Vehicles" component={Vehiclestack} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopColor: colors.lighterAshBlue,
    borderTopWidth: 0.5
  }
})