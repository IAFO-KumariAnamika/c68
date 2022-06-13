import React,{Component} from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import Screen from "react-native-screens";

export default class BottonTabNavigator extends Component {
    render(){
        return(
            <NavigationContainer>
                <TabRouter.Navigator>
                    <Tab.Screen name="Transaction" component={TransactionScreen}/>
                    <Tab.Screen name="Search" component={SearchScreen}/>
                    
                </TabRouter.Navigator>
            </NavigationContainer>
        )
    }
}