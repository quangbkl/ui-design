import React from 'react';
import {View} from 'react-native';

const Separator = props => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#8b8b8b',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
};

export default Separator;
