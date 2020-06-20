import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import '__mocks__';
import RootNavigator from 'navigations/RootNavigator';
import AppProvider from 'hooks/app/AppProvider';
import { Root } from 'native-base';

console.disableYellowBox = true;

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
