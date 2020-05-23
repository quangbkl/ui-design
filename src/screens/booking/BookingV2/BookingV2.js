import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import StepIndicator from 'react-native-step-indicator';
import {BaseColor} from 'config/color';
import Step1 from './Step1';

const thirdIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7eaec4',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7eaec4',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#7eaec4',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#7eaec4',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#7eaec4',
};

const getStepIndicatorIconConfig = ({position, stepStatus}) => {
    const iconConfig = {
        name: 'feed',
        color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
        size: 15,
    };
    switch (position) {
        case 0: {
            iconConfig.name = 'shopping-cart';
            break;
        }
        case 1: {
            iconConfig.name = 'location-on';
            break;
        }
        case 2: {
            iconConfig.name = 'assessment';
            break;
        }
        case 3: {
            iconConfig.name = 'payment';
            break;
        }
        case 4: {
            iconConfig.name = 'track-changes';
            break;
        }
        default: {
            break;
        }
    }
    return iconConfig;
};

const BookingV2 = () => {
    const [step, setStep] = useState(0);
    const onStepPress = position => {
        setStep(position)
      }
    
      const renderViewPagerPage = data => {
        return (
          <View style={styles.page}>
            <Text>{data}</Text>
          </View>
        )
      }

      const renderStepIndicator = params => (
        <MaterialIcon {...getStepIndicatorIconConfig(params)} />
      )
    return (
        <View style={styles.container}>
            <View style={styles.stepIndicator}>
                <StepIndicator
                    stepCount={3}
                    customStyles={thirdIndicatorStyles}
                    currentPosition={step}
                    onPress={onStepPress}
                    labels={['Đặt chỗ', 'Thanh Toán', 'Hoàn thành']}
                />
            </View>
            <Step1 />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    stepIndicator: {
        marginTop: 10
    //   marginVertical: 50
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    stepLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#999999'
    },
    stepLabelSelected: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: BaseColor.bluePrimaryColor,
    }
  })

export default BookingV2;
