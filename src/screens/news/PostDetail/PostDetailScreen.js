// https://s3.envato.com/files/274748864/ScreenShot/702-Post.png
import React, {useState} from 'react';
import {Animated, Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {CustomIcon, Header, Separator, Text} from 'components';
import {getRouterParam} from 'helpers/common';
import useApp from 'hooks/app/useApp';
import {BaseColor} from '../../../config/color';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const PostDetailScreen = (props) => {
	const postId = getRouterParam(props, 'postId');
	const {state: appState} = useApp();
	const {i18n} = appState;
	const {color} = appState;
	const [scrollY] = useState(
		new Animated.Value(
			// iOS has negative initial scroll value because content inset...
			Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
		),
	);
	const _renderScrollViewContent = () => {
		return (
			<View style={styles.scrollViewContent}>
				{/* Description */}
				<View>
					<Text title3>Hotel Description</Text>
					<Text thin body2>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged
					</Text>
				</View>
				<Separator/>
			</View>
		);
	};
	const HeaderRightComponent = () => {
		return <CustomIcon type="bookmark" color={color.primaryColor} />;
	};
	const scrollYRender = Animated.add(
		scrollY,
		Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
	);
	const headerTranslate = scrollYRender.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -HEADER_SCROLL_DISTANCE],
		extrapolate: 'clamp',
	});
	
	return (
		<SafeAreaView style={styles.fill}>
			<StatusBar
				translucent
				barStyle="light-content"
				backgroundColor="rgba(0, 0, 0, 0.251)"
			/>
			<Animated.ScrollView
				style={styles.fill}
				scrollEventThrottle={1}
				onScroll={Animated.event(
					[{nativeEvent: {contentOffset: {y: scrollY}}}],
					{useNativeDriver: true},
				)}>
				{_renderScrollViewContent()}
			</Animated.ScrollView>
			<Animated.View
				pointerEvents="none"
				style={[
					styles.header,
					{transform: [{translateY: headerTranslate}]},
				]}>
				<Animated.Image
					style={styles.backgroundImage}
					source={{
						uri:
							'https://www.bigstockphoto.com/images/homepage/module-6.jpg',
					}}
				/>
			</Animated.View>
			<Animated.View style={styles.bar}>
				<Header
					BodyComponent={null}
					RightComponent={<HeaderRightComponent/>}
				/>
			</Animated.View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	map: StyleSheet.absoluteFillObject,
	fill: {
		flex: 1,
	},
	
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		overflow: 'hidden',
		height: HEADER_MAX_HEIGHT,
	},
	backgroundImage: {
		position: 'absolute',
		width: '100%',
		height: HEADER_MAX_HEIGHT,
		resizeMode: 'cover',
	},
	bar: {
		backgroundColor: 'transparent',
		marginTop: 20, /*KyLC*/
		// marginTop: Platform.OS === 'ios' ? 20 : 30,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
	scrollViewContent: {
		// iOS uses content inset, which acts like padding.
		paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20,
	},
	
	titleReviewBlock: {
		textAlign: 'center',
	},
	titleReviewDescription: {
		textAlign: 'center',
		margin: 10,
	},
	blockReviews: {
		marginTop: 20,
	},
	commonRate: {
		display: 'flex',
		flexDirection: 'row',
	},
	ratePerTen: {
		width: 60,
		height: 60,
		lineHeight: 60,
		borderRadius: 30,
		marginRight: 5,
		textAlign: 'center',
	},
	commonRateRight: {
		justifyContent: 'space-around',
	},
	rowReview: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	detailReview: {
		marginTop: 15,
	},
	reviewItem: {
		marginBottom: 10,
		width: '48%',
	},
	reviewItemFirstLine: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	serviceItem: {
		alignItems: 'center',
		marginRight: 20,
	},
	iconHelp: {
		marginRight: 5,
		color: BaseColor.bluePrimaryColor,
	},
	reasonBlock: {
		marginLeft: 10,
	},
	reasonItem: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 5,
	},
	reasonItemRight: {
		justifyContent: 'space-around',
		marginLeft: 10,
	}
});

PostDetailScreen.propTypes = {};

export default PostDetailScreen;
