import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import useApp from '../../hooks/app/useApp';
import Text from '../../components/Text/Text';
import Icon from '../Icon/Icon';

const FlightItem = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        style,
        from,
        to,
        totalHour,
        route,
        image,
        brand,
        type,
        price,
        onPress
    } = props;

    const styles = StyleSheet.create({
        content: {
            padding: 10,
            borderRadius: 8,
            backgroundColor: colors.fieldColor
        },
        contentTop: {
            flexDirection: 'row',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: colors.textSecondaryColor
        },
        line: {
            width: '100%',
            height: 1,
            borderWidth: 0.5,
            borderColor: colors.dividerColor,
            borderStyle: 'dashed'
        },
        contentLine: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        dot: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: colors.primaryColor,
            position: 'absolute'
        },
        contentBottom: {
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between'
        },
        bottomLeft: {flexDirection: 'row', alignItems: 'center'},
        image: {width: 32, height: 32, marginRight: 10, borderRadius: 16}
    });

    return (
        <TouchableOpacity style={[styles.content, style]} onPress={onPress}>
            <View style={styles.contentTop}>
                <View style={{flex: 1}}>
                    <Text title2>{from.hour}</Text>
                    <Text footnote light>
                        {from.value}
                    </Text>
                </View>
                <View style={{flex: 1.5, alignItems: 'center'}}>
                    <Text caption1 light>
                        {totalHour} Hours
                    </Text>
                    <View style={styles.contentLine}>
                        <View style={styles.line}/>
                        <Icon
                            name="plane"
                            color={colors.dividerColor}
                            size={24}
                            solid
                        />
                        <View style={styles.dot}/>
                    </View>
                    <Text caption1 light>
                        {route}
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text title2>{to.hour}</Text>
                    <Text footnote light>
                        {to.value}
                    </Text>
                </View>
            </View>
            <View style={styles.contentBottom}>
                <View style={styles.bottomLeft}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={image}
                    />
                    <View>
                        <Text caption1 semibold accentColor>
                            {brand}
                        </Text>
                        <Text caption2 light>
                            {type}
                        </Text>
                    </View>
                </View>
                <View
                    style={{flexDirection: 'row', alignItems: 'flex-end'}}
                >
                    <Text title3 semibold primaryColor>
                        {price}
                    </Text>
                    <Text caption1 light style={{marginLeft: 5}}>
                        Pax
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

FlightItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    from: PropTypes.object,
    to: PropTypes.object,
    totalHour: PropTypes.number,
    brand: PropTypes.string,
    image: PropTypes.node.isRequired,
    type: PropTypes.string,
    price: PropTypes.string,
    route: PropTypes.string,
    onPress: PropTypes.func
};

FlightItem.defaultProps = {
    style: {},
    from: {
        name: 'United State',
        value: 'USA',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
        hour: '05:00'
    },
    to: {
        name: 'Singapore',
        value: 'SIN',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
        hour: '18:00'
    },
    totalHour: 13.5,
    brand: 'Vietjet',
    image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
    type: 'Economy',
    price: '$499,99',
    route: 'Non Stop',
    onPress: () => {
    }
};

export default FlightItem;
