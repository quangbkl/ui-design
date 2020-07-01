import React, {useState} from "react";
import {AsyncStorage, SafeAreaView, StyleSheet, View} from "react-native";
import {Toast} from "native-base";
import {useNavigation} from "@react-navigation/native";
import StepIndicator from "react-native-step-indicator";
import {BaseColor} from "config/color";
import Step1 from "./Step1";
import Header from "components/Header/Header";
import useApp from "hooks/app/useApp";
import Step2 from "./Step2";
import Step3 from "./Step3";
import _ from "lodash";
import appRoutes from "navigations/appRoutes";
import Touchable from 'components/Touchable/Touchable';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import {v4 as uuidv4} from 'react-native-uuid';
import bookingServices from "services/bookingServices";
import moment from 'moment';

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

const LeftComponent = ({onPrev}) => {
	const {state: appState} = useApp();
	const {color} = appState;
	return (
		<Touchable onPress={onPrev}>
			<FontAwesome5Icon
				name="arrow-left"
				color={color.primaryColor}
				size={18}
			/>
		</Touchable>
	);
};

const calculateGrandTotal = (informationBooking) => {
	const {tour, guest} = informationBooking;
	return guest * tour.pricePerParticipant * (1 + 5 / 100);
};

const BookingTourV2 = (props) => {
	const informationBooking = _.get(props, [
		"route",
		"params",
		"informationBooking",
	]);
	informationBooking.grandTotal = calculateGrandTotal(informationBooking);
	const navigation = useNavigation();
	const [step, setStep] = useState(0);
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		note: '',
	})
	const [loading, setLoading] = useState(false);
	const [bookingId, setBookingId] = useState();
	const onStepPress = (position) => {
		setStep(position);
	};
	
	const onNextStep2 = async (cb) => {
		const data = await cb();
		setStep(1);
	};
	
	const onNextStep3 = () => {
		handleSaveTourBooking();
	};
	
	const onComplete = () => {
		navigation.navigate(appRoutes.BOOKING_TOUR_AUTHENTICATE, { bookingId });
	};
	
	const handleSaveTourBooking = async () => {
		let userId = await AsyncStorage.getItem('userId');
		let userLoginId = await AsyncStorage.getItem('userLoginId');
		if (!userId) {
			userId = uuidv4();
			AsyncStorage.setItem('userId', userId);
		}
		const params = {
			tourId: informationBooking.tour.id,
			startDate: moment(informationBooking.checkinDate, 'DD-mm-YYYY').format('DD-mm-YYYY'),
			pricePerParticipant: informationBooking.tour.pricePerParticipant,
			grandTotal: informationBooking.grandTotal,
			guests: informationBooking.guest,
			guestName: userInfo.name,
			guestEmail: userInfo.email,
			guestPhoneNumber: userInfo.phoneNumber,
			note: userInfo.note,
			userId: userLoginId || userId,
		};
		setLoading(true);
		console.log(params)
		bookingServices.createBookingTour(params)
		.then((res) => {
			setBookingId(res.result.id);
			setStep(2);
		})
		.catch((err) => {
			console.log(JSON.stringify(err));
			Toast.show({
				text: 'Đặt Tour không thành công',
				type: 'danger',
				position: 'top'
			});
		})
		.finally(() => setLoading(false));
	}
	
	const onPrev = () => {
		if (step === 0 || bookingId) {
			navigation.goBack();
			return;
		} else {
			setStep(step - 1);
		}
	}
	
	return (
		<SafeAreaView style={{flex: 1}}>
			<Spinner
				visible={loading}
				textContent={'Vui lòng chờ...'}
				textStyle={styles.spinnerTextStyle}
			/>
			<Header title="Đặt Tour" LeftComponent={<LeftComponent onPrev={onPrev}/>}/>
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
				{step === 0 && (
					<Step1
						informationBooking={informationBooking}
						onNextStep2={onNextStep2}
						userInfo={userInfo}
						setUserInfo={setUserInfo}
					/>
				)}
				{step === 1 && (
					<Step2
						informationBooking={informationBooking}
						onNextStep3={onNextStep3}
						userInfo={userInfo}
					/>
				)}
				{step === 2 && (
					<Step3
						informationBooking={informationBooking}
						onComplete={onComplete}
					/>
				)}
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
	spinnerTextStyle: {
		color: '#FFF'
	},
});

export default BookingTourV2;