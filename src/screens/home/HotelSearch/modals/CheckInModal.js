import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import Text from "../../../../components/Text/Text";
import {TouchableOpacity} from "react-native";
import {Calendar} from "react-native-calendars";
import {FontFamily} from "../../../../config/typography";
import Modal from "react-native-modal";
import useApp from "../../../../hooks/app/useApp";

const CheckInModal = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {time, onChange} = props;

    const [checkinTime, setCheckinTime] = useState(time || '');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (time && time !== checkinTime) setCheckinTime(time);
    }, [time]);

    const openModal = () => {
        setModalVisible(true);
    };

    const handleDateChange = day => {
        const {dateString} = day;
        setCheckinTime(dateString);
    }

    const styles = StyleSheet.create({
        checkIn: {
            flex: 1,
            justifyContent: 'center'
        },
        contentModal: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        contentCalendar: {
            borderRadius: 8,
            width: '100%',
            backgroundColor: colors.backgroundSecondaryColor
        },
        contentActionCalendar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15
        }
    });

    return (
        <>
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
                            markedDates={{
                                [checkinTime]: {selected: true, marked: true,}
                            }}
                            current={checkinTime}
                            onDayPress={handleDateChange}
                            onDayLongPress={handleDateChange}
                            monthFormat={'dd-MM-yyyy'}
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
                                    setCheckinTime(time);
                                }}
                            >
                                <Text body1>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    onChange(checkinTime);
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
                style={styles.checkIn}
                onPress={openModal}
            >
                <Text caption1 grayColor style={{marginBottom: 5}}>
                    Check In
                </Text>
                <Text headline semibold>{time}</Text>
            </TouchableOpacity>
        </>
    );
}

CheckInModal.propTypes = {};

CheckInModal.defaultProps = {
    onChange: () => {
    }
}

export default CheckInModal;
