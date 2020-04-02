import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import {View, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {BaseColor} from '../../config/color';
import Text from '../Text/Text';

const LeftComponent = ({goBack}) => {
    return (
        <Button transparent onPress={goBack}>
            <FontAwesome5Icon name="arrow-left" color={BaseColor.primaryColor} size={18}/>
        </Button>
    );
};
const BodyComponent = ({title}) => {
    return <Text>{title}</Text>;
};
const RightComponent = () => {
    return <View></View>;
};

const Header = (props) => {
    const {left, body, right, title, goBack} = props;

    return (
        <View style={styles.container}>
            <View>
                {left || <LeftComponent goBack={goBack}/>}
            </View>
            <View>
                {body || <BodyComponent title={title}/>}
            </View>
            <View>
                {right || <RightComponent/>}
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
});

Header.propTypes = {
    left: PropTypes.element,
    body: PropTypes.element,
    right: PropTypes.element,
    goBack: PropTypes.func,
    title: PropTypes.string,
};

export default Header;
