import React from 'react';
import {TextInput, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const Input = () => {
  return (
    <TextInput {...this.props} style={{borderColor: 'black', borderWidth: 1}} />
  );
};

Input.propTypes = {
  style: ViewPropTypes.style,
};

export default Input;
