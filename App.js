import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import './src/__mocks__';
import RootNavigator from './src/navigations/RootNavigator';


export default () => {
    return (
        <Suspense fallback={null}>
            <RootNavigator/>
        </Suspense>
    );
};
