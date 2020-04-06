import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import '__mocks__';
import RootNavigator from 'navigations/RootNavigator';
import AppProvider from 'hooks/app/AppProvider';
import ThemeProvider from 'hooks/theme/ThemeProvider';

export default () => {
    return (
        <AppProvider>
            <ThemeProvider>
                <Suspense fallback={null}>
                    <RootNavigator/>
                </Suspense>
            </ThemeProvider>
        </AppProvider>
    );
};
