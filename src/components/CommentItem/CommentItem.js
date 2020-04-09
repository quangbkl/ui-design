import React from 'react';
import {ViewPropTypes, Text} from 'react-native';
import PropTypes from 'prop-types';

const CommentItem = () => {
    return <Text>CommentItem</Text>;
};

CommentItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    rate: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    comment: PropTypes.string,
    style: ViewPropTypes.style,
};

export default CommentItem;
