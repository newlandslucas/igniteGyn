import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';

type AuthRoutes = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigatorROutesProps =  NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{ headerShown: false}}
        >
            <Screen 
                name="signIn"
                component={Signin}
            />
             <Screen 
                name="signUp"
                component={Signup}
            />
        </Navigator>
    )
}