import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Container, Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "react-native-step-indicator";
import { BaseColor } from "config/color";
import Step1 from "./Step1";
import Header from "components/Header/Header";
import useApp from "hooks/app/useApp";
import Step2 from "./Step2";
import Step3 from "./Step3";

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#7eaec4",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#7eaec4",
  stepStrokeUnFinishedColor: "#dedede",
  separatorFinishedColor: "#7eaec4",
  separatorUnFinishedColor: "#dedede",
  stepIndicatorFinishedColor: "#7eaec4",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "transparent",
  stepIndicatorLabelFinishedColor: "transparent",
  stepIndicatorLabelUnFinishedColor: "transparent",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#7eaec4",
};

const BookingV2 = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const onStepPress = (position) => {
    setStep(position);
  };

  const onNextStep2 = async (cb) => {
    const data = await cb();
    setStep(1);
  };

  const onNextStep3 = () => {
    setStep(2);
  };

  const onComplete = () => {
    navigation.navigate('Home')
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Đặt Phòng" />
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={3}
            customStyles={thirdIndicatorStyles}
            currentPosition={step}
            onPress={onStepPress}
            labels={["Đặt chỗ", "Xem lại", "Thanh toán"]}
          />
        </View>
        {step === 0 && <Step1 onNextStep2={onNextStep2} />}
        {step === 1 && <Step2 onNextStep3={onNextStep3} />}
        {step === 2 && <Step3 onComplete={onComplete} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  stepIndicator: {
    marginTop: 10,
    //   marginVertical: 50
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999",
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: BaseColor.bluePrimaryColor,
  },
});

export default BookingV2;
