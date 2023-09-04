import {NavigationContainer} from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '@hooks/useAuth'
import { Loading } from '@components/Loading'
import { StackRoutes } from './app.stack.routes'


export function Routes(){
    const {user, isLoadingStorageData} = useAuth()

    if(isLoadingStorageData){
        return <Loading />
     }

    return(
        <NavigationContainer>
            {user.id ? <StackRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}