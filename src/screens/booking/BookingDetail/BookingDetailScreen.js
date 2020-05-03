import React, {Component} from 'react'
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import {Container} from 'native-base';
import {Header} from 'components';
import Text from 'components/Text/Text';
import {BaseColor} from 'config/color';
import Preview from 'components/BookingHistory/Preview';
import Confirm from 'components/BookingHistory/Confirm';
import Complete from 'components/BookingHistory/Complete';
import Detail from 'components/BookingHistory/Detail';

export default class BookingDetailScreen extends Component {
	
	render(){
		const tabBarUnderlineStyle = {
			backgroundColor: BaseColor.primaryColor,
			height: 1,
		};
		return <Container>
			<Header title={'Booking Detail'} RightComponent={<Text style={{color: 'red'}}>Save</Text>}/>
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar/>}
				tabBarActiveTextColor={BaseColor.textPrimaryColor}
				tabBarInactiveTextColor={BaseColor.dividerColor}
				tabBarUnderlineStyle={tabBarUnderlineStyle}
				tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 18, fontWeight: '300'}}
				showsHorizontalScrollIndicator={false}
			>
				<Preview tabLabel="Preview" />
				<Confirm tabLabel="Confirm" />
				<Complete tabLabel="Complete" />
				<Detail tabLabel="Detail" />
			</ScrollableTabView>
		</Container>
	}
}

