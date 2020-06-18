import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import useApp from '../../hooks/app/useApp';
import Icon from '../Icon/Icon';
import Text from '../../components/Text/Text';

const QuantityPicker = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [value, setValue] = useState(props.value);

    const onChange = (type) => {
        if (type === 'up') {
            setValue(value + 1);
        } else {
            setValue(value - 1 > 0 ? value - 1 : 0);
        }
    };

    const {style, label, detail} = props;

    const styles = StyleSheet.create({
        contentPicker: {
            padding: 10,
            borderRadius: 8,
            flex: 1,
            backgroundColor: colors.backgroundSecondaryColor,
            alignItems: 'center'
        }
    });

    return (
        <View style={[styles.contentPicker, style]}>
            <Text body1 style={{marginBottom: 5}}>
                {label}
            </Text>
            <Text caption1 light style={{marginBottom: 5}}>
                {detail}
            </Text>
            <TouchableOpacity onPress={() => onChange('up')}>
                <Icon
                    name="plus-circle"
                    size={24}
                    color={colors.primaryColor}
                />
            </TouchableOpacity>
            <Text title1>{value}</Text>
            <TouchableOpacity onPress={() => onChange('down')}>
                <Icon
                    name="minus-circle"
                    size={24}
                    color={colors.grayColor}
                />
            </TouchableOpacity>
        </View>
    );
};

QuantityPicker.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    detail: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func
};

QuantityPicker.defaultProps = {
    style: {},
    label: 'Adults',
    detail: '>= 12 years',
    value: 1,
    onChange: () => {
    }
};

export default QuantityPicker;
