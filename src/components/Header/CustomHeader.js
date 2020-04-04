import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { BaseColor } from '../../config/color';

const LeftComponent = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5Icon name="arrow-left" color={BaseColor.primaryColor} size={18}/>
        </TouchableOpacity>
    );
};
const BodyComponent = ({title, description}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {description ? <Text style={styles.description}>{title}</Text> : null}
        </View>
    );
};

const CustomHeader = (props) => {
    const {hasLeft, left, hasRight, right, title, description} = props;

    return (
        <View style={styles.container}>
            <View>
                {hasLeft ? (left || <LeftComponent />) : null}
            </View>
            <View>
                <BodyComponent title={title} description={description} />
            </View>
            <View>
                {hasRight ? right : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    title: {
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        color: BaseColor.grayColor,
        textAlign: 'center',
    }
});

CustomHeader.propTypes = {
    hasLeft: PropTypes.bool,
    left: PropTypes.element,
    hasRight: PropTypes.bool,
    right: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string,
};

CustomHeader.defaultProps = {
    hasLeft: false,
    left: null,
    hasRight: false,
    right: null,
}

export default CustomHeader;
