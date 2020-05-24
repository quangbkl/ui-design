import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Container } from "native-base";
import StepIndicator from "react-native-step-indicator";
import { BaseColor } from "config/color";
import Step1 from "./Step1";
import Header from "components/Header/Header";
import useApp from "hooks/app/useApp";
import Step2 from "./Step2";

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

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: "feed",
    color: stepStatus === "finished" ? "#ffffff" : "#fe7013",
    size: 15,
  };
  switch (position) {
    case 0: {
      iconConfig.name = "shopping-cart";
      break;
    }
    case 1: {
      iconConfig.name = "location-on";
      break;
    }
    case 2: {
      iconConfig.name = "assessment";
      break;
    }
    case 3: {
      iconConfig.name = "payment";
      break;
    }
    case 4: {
      iconConfig.name = "track-changes";
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
  const onStepPress = (position) => {
    setStep(position);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Đặt Phòng" />
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={4}
            customStyles={thirdIndicatorStyles}
            currentPosition={step}
            onPress={onStepPress}
            labels={["Đặt chỗ", "Cá nhân", "Thanh toán", "Hoàn thành"]}
          />
        </View>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step2 />}
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
