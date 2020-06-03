import React from 'react';
import {ScrollableTabBar, ScrollableTabView} from '@valdio/react-native-scrollable-tabview';
import {Container} from 'native-base';
import {Header} from 'components';
import Text from 'components/Text/Text';
import {BaseColor} from 'config/color';
import Preview from 'components/BookingHistory/Preview';
import Confirm from 'components/BookingHistory/Confirm';
import Complete from 'components/BookingHistory/Complete';
import Detail from 'components/BookingHistory/Detail';
import useApp from 'hooks/app/useApp';

const BookingDetailScreen = () => {
	const {state: appState} = useApp();
	const {color} = appState;
	const tabBarUnderlineStyle = {
		backgroundColor: color.primaryColor,
		height: 1,
	};
	return <Container>
		<Header title={'Booking Detail'} RightComponent={<Text style={{color: color.primaryColor}}>Save</Text>}/>
		<ScrollableTabView
			renderTabBar={() => <ScrollableTabBar/>}
			tabBarActiveTextColor={BaseColor.textPrimaryColor}
			tabBarInactiveTextColor={BaseColor.dividerColor}
			tabBarUnderlineStyle={tabBarUnderlineStyle}
			tabBarTextStyle={{fontSize: 18, fontWeight: '300'}}
			showsHorizontalScrollIndicator={false}
		>
			<Preview tabLabel="Preview"/>
			<Confirm tabLabel="Confirm"/>
			<Complete tabLabel="Complete"/>
			<Detail tabLabel="Detail"/>
		</ScrollableTabView>
	</Container>;
};

export default BookingDetailScreen;
