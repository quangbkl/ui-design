import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import useApp from '../../hooks/app/useApp';
import Icon from '../Icon/Icon';
import Text from '../../components/Text/Text';

const FlightPlan = (props) => {
    const {
        style,
        from,
        fromCode,
        to,
        toCode,
        round,
        onPressFrom,
        onPressTo
    } = props;

    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        contentRow: {flexDirection: 'row'},
        centerView: {
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10
        },
        colCenter: {flex: 1, alignItems: 'center'}
    });

    return (
        <View style={[styles.contentRow, style]}>
            <TouchableOpacity
                style={styles.colCenter}
                onPress={onPressFrom}
                activeOpacity={0.9}
            >
                <Text body1 light>
                    From
                </Text>
                <Text header semibold>
                    {fromCode}
                </Text>
                <Text body1>{from}</Text>
            </TouchableOpacity>
            <View style={styles.centerView}>
                <Icon
                    name="plane"
                    color={colors.primaryColor}
                    size={24}
                    solid
                />
                {round && (
                    <Icon
                        name="plane"
                        color={colors.primaryColor}
                        size={24}
                        solid
                        style={{
                            transform: [{rotate: '180deg'}],
                            marginTop: 5
                        }}
                    />
                )}
            </View>
            <TouchableOpacity
                style={styles.colCenter}
                onPress={onPressTo}
                activeOpacity={0.9}
            >
                <Text body1 light>
                    To
                </Text>
                <Text header semibold>
                    {toCode}
                </Text>
                <Text body1>{to}</Text>
            </TouchableOpacity>
        </View>
    );
};

FlightPlan.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    round: PropTypes.bool,
    fromCode: PropTypes.string,
    toCode: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    onPressFrom: PropTypes.func,
    onPressTo: PropTypes.func
};

FlightPlan.defaultProps = {
    style: {},
    round: true,
    fromCode: 'SIN',
    toCode: 'SYD',
    from: 'Singapore',
    to: 'Sydney',
    onPressFrom: () => {
    },
    onPressTo: () => {
    }
};

export default FlightPlan;
