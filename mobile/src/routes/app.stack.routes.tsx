import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { AllMyAds } from '@screens/AllMyAds';
import { CreateAds } from '@screens/CreateAds';
import { DetailsAds } from '@screens/DetailsAds';
import { DetailsMyAds } from '@screens/DetailsMyAds';
import { Home } from '@screens/Home';
import { PreviewMyAds } from '@screens/PreviewMyAds';
import { SignOut } from '@screens/SignOut';
import { AppRoutes } from './app.routes';



type StackRoutes = {
    detailsAds: { Id: string };
    Home: undefined;
    DetailsMyAds: { Id: string };
    CreateAds: undefined;
    SignOut: undefined;
    AllMyAds: undefined;
    PreviewMyAds: {
      is_new: boolean,
      accept_trade: boolean,
      arrayImageProducts: {
        name: string;
        uri: string;
        type: string;
      }[],
      name: string,
      description: string,
      price: number
    };
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>

const {Navigator, Screen} = createNativeStackNavigator<StackRoutes>();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Home' component={AppRoutes}/>
            <Screen name='detailsAds' component={DetailsAds}/>
            <Screen name='DetailsMyAds' component={DetailsMyAds}/>
            <Screen name='CreateAds' component={CreateAds}/>
            <Screen name='SignOut' component={AppRoutes}/>
            <Screen name='AllMyAds' component={AppRoutes}/>
            <Screen name='PreviewMyAds' component={PreviewMyAds}/>
        </Navigator>
    )
}

