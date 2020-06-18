import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import useApp from '../../hooks/app/useApp';
import {FontFamily} from '../../config/typography';
import Text from '../../components/Text/Text';

const BookingTime = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [markedDates, setMarkedDates] = useState({});
    const [checkinTime, setCheckinTime] = useState('');
    const [checkoutTime, setCheckoutTime] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (open) => {
        setModalVisible(open);
    };

    const {
        style,
        checkInTime,
        checkOutTime,
        onCancel,
        onChange
    } = props;

    const styles = StyleSheet.create({
        contentPickDate: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 8,
            backgroundColor: colors.backgroundSecondaryColor,
            padding: 10
        },
        itemPick: {
            flex: 1,
            justifyContent: 'center'
        },
        linePick: {
            width: 1,
            backgroundColor: colors.dividerColor,
            marginRight: 10
        },
        contentModal: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        contentCalendar: {
            borderRadius: 8,
            width: '100%',
            backgroundColor: colors.backgroundSecondaryColor,
        },
        contentActionCalendar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15
        }
    });

    return (
        <View style={[styles.contentPickDate, style]}>
            <Modal
                isVisible={modalVisible}
                backdropColor="rgba(0, 0, 0, 0.5)"
                backdropOpacity={1}
                animationIn="fadeIn"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
            >
                <View style={styles.contentModal}>
                    <View style={styles.contentCalendar}>
                        <Calendar
                            style={{
                                borderRadius: 8
                            }}
                            markedDates={markedDates}
                            current={'2019-05-05'}
                            minDate={'2019-05-10'}
                            maxDate={'2019-05-30'}
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            onDayLongPress={day => {
                                console.log('selected day', day);
                            }}
                            monthFormat={'dd-MM-yyyy'}
                            onMonthChange={month => {
                                console.log('month changed', month);
                            }}
                            theme={{
                                backgroundColor: colors.backgroundSecondaryColor,
                                calendarBackground: colors.backgroundSecondaryColor,
                                textSectionTitleColor:
                                colors.textPrimaryColor,
                                selectedDayBackgroundColor:
                                colors.primaryColor,
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: colors.primaryColor,
                                dayTextColor: colors.textPrimaryColor,
                                textDisabledColor: colors.grayColor,
                                dotColor: colors.primaryColor,
                                selectedDotColor: '#ffffff',
                                arrowColor: colors.primaryColor,
                                monthTextColor: colors.textPrimaryColor,
                                textDayFontFamily: FontFamily.default,
                                textMonthFontFamily: FontFamily.default,
                                textDayHeaderFontFamily: FontFamily.default,
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 14,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 14
                            }}
                        />
                        <View style={styles.contentActionCalendar}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    onCancel();
                                }}
                            >
                                <Text body1>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    onChange();
                                }}
                            >
                                <Text body1 primaryColor>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.itemPick}
                onPress={() => openModal(true)}
            >
                <Text caption1 light style={{marginBottom: 5}}>
                    Check In
                </Text>
                <Text headline semibold>
                    {checkInTime}
                </Text>
            </TouchableOpacity>
            <View style={styles.linePick}/>
            <TouchableOpacity
                style={styles.itemPick}
                onPress={() => openModal(true)}
            >
                <Text caption1 light style={{marginBottom: 5}}>
                    Check Out
                </Text>
                <Text headline semibold>
                    {checkOutTime}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

BookingTime.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    checkInTime: PropTypes.string,
    checkOutTime: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func
};

BookingTime.defaultProps = {
    style: {},
    checkInTime: 'Sun, Nov 01',
    checkOutTime: 'Sun, Nov 11',
    onCancel: () => {
    },
    onChange: () => {
    }
};

export default BookingTime;
