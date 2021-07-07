import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import '__mocks__';
import RootNavigator from 'navigations/RootNavigator';
import AppProvider from 'hooks/app/AppProvider';
import { Root } from 'native-base';
import firebaseHelper from 'helpers/firebase';
console.disableYellowBox = true;

firebaseHelper.initApp();

export default () => {
    return (
        <AppProvider>
            <Root>
                <Suspense fallback={null}>
                    <RootNavigator/>
                </Suspense>
            </Root>
        </AppProvider>
    );
};
