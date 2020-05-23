import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import '__mocks__';
import RootNavigator from 'navigations/RootNavigator';
import AppProvider from 'hooks/app/AppProvider';

export default () => {
    return (
        <AppProvider>
            <Suspense fallback={null}>
                <RootNavigator/>
            </Suspense>
        </AppProvider>
    );
};
