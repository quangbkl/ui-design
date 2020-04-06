import React, {useEffect, useState} from 'react';
import ThemeContext from './ThemeContext';

const initialState = {};

const ThemeProvider = ({children, ...props}) => {
    const value = {
        state: {},
        actions: {}
    };

    return (
        <ThemeContext.Provider value={value}>
            {
                React.Children.map(children, child =>
                    React.cloneElement(child, {...props})
                )
            }
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {};

export default ThemeProvider;
