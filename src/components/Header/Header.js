import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {BaseColor} from 'config/color';
import Touchable from '../Touchable/Touchable';

const DefaultLeftComponent = () => {
    const navigation = useNavigation();
    return (
        <Touchable onPress={() => navigation.goBack()}>
            <FontAwesome5Icon
                name="arrow-left"
                color={BaseColor.primaryColor}
                size={18}
            />
        </Touchable>
    );
};
const DefaultBodyComponent = ({title, description}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {description ? <Text style={styles.description}>{title}</Text> : null}
        </View>
    );
};

const Header = props => {
    const {title, description, LeftComponent, RightComponent, BodyComponent} = props;

    return (
        <View style={styles.container}>
            <View>{LeftComponent === undefined ? <DefaultLeftComponent/> : LeftComponent}</View>
            <View>
                {BodyComponent === undefined ? (
                    <DefaultBodyComponent title={title} description={description}/>
                ) : (
                    BodyComponent
                )}
            </View>
            <View>{RightComponent || null}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: BaseColor.fieldColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
    },
    title: {
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        color: BaseColor.grayColor,
        textAlign: 'center',
    },
});

Header.propTypes = {
    title: PropTypes.element,
    description: PropTypes.element,
    LeftComponent: PropTypes.element,
    RightComponent: PropTypes.element,
    BodyComponent: PropTypes.element,
};

export default Header;
