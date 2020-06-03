import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Text from '../../components/Text/Text';
import useApp from '../../hooks/app/useApp';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const FormOption = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [modalVisible, setModalVisible] = useState(false);
    const [option, setOption] = useState(props.option);
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setOption(option.map(item => {
            return {
                ...item,
                checked: item.value === value
            };
        }));
    }, []);

    const openModal = () => {
        setModalVisible(true);
        setOption(option.map(item => {
            return {
                ...item,
                checked: item.value === value
            };
        }));
    };

    const onSelect = (select) => {
        setOption(option.map(item => {
            return {
                ...item,
                checked: item.value === select.value
            };
        }));
    };

    const onApply = () => {
        const {onChange} = props;
        const selected = option.filter(item => item.checked);

        if (selected.length > 0) {
            const {value: selectedValue} = selected[0];
            setValue(selectedValue);
            setModalVisible(false);
            onChange(selectedValue);
        }
    };

    const {style, label, onCancel} = props;

    const styles = StyleSheet.create({
        contentForm: {
            padding: 10,
            borderRadius: 8,
            width: '100%',
            backgroundColor: colors.fieldColor
        },
        bottomModal: {
            justifyContent: 'flex-end',
            margin: 0
        },
        contentFilterBottom: {
            width: '100%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 20,
            backgroundColor: colors.whiteColor
        },
        contentSwipeDown: {
            paddingTop: 10,
            alignItems: 'center'
        },
        lineSwipeDown: {
            width: 30,
            height: 2.5,
            backgroundColor: colors.dividerColor
        },
        contentActionModalBottom: {
            flexDirection: 'row',
            paddingVertical: 10,
            marginBottom: 10,
            justifyContent: 'space-between',
            borderBottomColor: colors.textSecondaryColor,
            borderBottomWidth: 1
        }
    });

    return (
        <View>
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => {
                    setModalVisible(false);
                    setOption(props.option);
                    onCancel();
                }}
                swipeDirection={['down']}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown}/>
                    </View>
                    {option.map((item, index) => (
                        <TouchableOpacity
                            style={styles.contentActionModalBottom}
                            key={item.value}
                            onPress={() => onSelect(item)}
                        >
                            <Text
                                body2
                                semibold
                                primaryColor={item.checked}
                            >
                                {item.text}
                            </Text>
                            {item.checked && (
                                <Icon
                                    name="check"
                                    size={14}
                                    color={colors.primaryColor}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                    <Button
                        full
                        style={{marginTop: 10, marginBottom: 20}}
                        onPress={() => onApply()}
                    >
                        Apply
                    </Button>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.contentForm, style]}
                onPress={() => openModal()}
            >
                <Text caption2 light style={{marginBottom: 5}}>
                    {label}
                </Text>
                <Text body1 semibold>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

FormOption.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    value: PropTypes.string,
    option: PropTypes.array,
    onCancel: PropTypes.func,
    onChange: PropTypes.func
};

FormOption.defaultProps = {
    style: {},
    label: 'Seat Class',
    value: 'Economy',
    option: [
        {
            value: 'Economy',
            text: 'Economy Class'
        },
        {
            value: 'Business',
            text: 'Business Class'
        },
        {
            value: 'First',
            text: 'First Class'
        },
        {
            value: 'Normal',
            text: 'Normal Class'
        }
    ],
    onCancel: () => {
    },
    onChange: () => {
    }
};

export default FormOption;
