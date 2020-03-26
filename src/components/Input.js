import React from 'react';
import {TextInput,ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return (
      <TextInput {...this.props} style={{borderColor: 'black', borderWidth: 1}}/>
    );
  }
}

Input.propTypes = {
  style: ViewPropTypes.style,
};

export default Input;
