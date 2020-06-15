import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {Text} from 'components/index';
import {BaseColor} from 'config/color';
import {Rating} from 'react-native-ratings';
import useApp from 'hooks/app/useApp';
import {Bar} from 'react-native-progress';
import {
    getRateFiveStars,
    getRateFourStars,
    getRateOneStars,
    getRateReviewPerFive,
    getRateThreeStars,
    getRateTwoStars,
} from 'helpers/tour';


const Review = ({item}) => {
    const {review} = item;
    const {users, scores} = review;
    const {state: appState} = useApp();
    const {color} = appState;

    const imageSize = 10;
    return (
        <Container>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.ratingContent}>
                        <View style={styles.score}>
                            <Text
                                style={{fontSize: 35, color: color.primaryColor}}>{getRateReviewPerFive(scores)}</Text>
                            <Text style={{opacity: 0.7}}>out of 5</Text>
                        </View>
                        <View style={styles.ratingDetail}>
                            <View style={styles.starBlock}>
                                <Rating
                                    readonly
                                    type='custom'
                                    imageSize={imageSize}
                                    ratingCount={5}
                                    startingValue={5}
                                    style={styles.starItem}
                                    ratingColor={'#a9a9a9'}
                                />
                                <Bar progress={getRateFiveStars(scores)} width={null} style={styles.scoreOfStars}
                                     color={color.primaryColor} borderWidth={0}
                                     unfilledColor={BaseColor.backgroundTertiaryColor}
                                />
                            </View>
                            <View style={styles.starBlock}>
                                <Rating
                                    readonly
                                    type='custom'
                                    imageSize={imageSize}
                                    ratingCount={4}
                                    startingValue={4}
                                    style={styles.starItem}
                                    ratingColor={'#a9a9a9'}
                                />
                                <Bar progress={getRateFourStars(scores)} width={null} style={styles.scoreOfStars}
                                     color={color.primaryColor} borderWidth={0}
                                     unfilledColor={BaseColor.backgroundTertiaryColor}
                                />
                            </View>
                            <View style={styles.starBlock}>
                                <Rating
                                    readonly
                                    type='custom'
                                    imageSize={imageSize}
                                    ratingCount={3}
                                    startingValue={3}
                                    style={styles.starItem}
                                    ratingColor={'#a9a9a9'}
                                />
                                <Bar progress={getRateThreeStars(scores)} width={null} style={styles.scoreOfStars}
                                     color={color.primaryColor} borderWidth={0}
                                     unfilledColor={BaseColor.backgroundTertiaryColor}
                                />
                            </View>
                            <View style={styles.starBlock}>
                                <Rating
                                    readonly
                                    type='custom'
                                    imageSize={imageSize}
                                    ratingCount={2}
                                    startingValue={2}
                                    style={styles.starItem}
                                    ratingColor={'#a9a9a9'}
                                />
                                <Bar progress={getRateTwoStars(scores)} width={null} style={styles.scoreOfStars}
                                     color={color.primaryColor} borderWidth={0}
                                     unfilledColor={BaseColor.backgroundTertiaryColor}
                                />
                            </View>
                            <View style={styles.starBlock}>
                                <Rating
                                    readonly
                                    type='custom'
                                    imageSize={imageSize}
                                    ratingCount={1}
                                    startingValue={1}
                                    style={styles.starItem}
                                    ratingColor={'#a9a9a9'}
                                />
                                <Bar progress={getRateOneStars(scores)} width={null}
                                     style={styles.scoreOfStars}
                                     color={color.primaryColor}
                                     borderWidth={0}
                                     unfilledColor={BaseColor.backgroundTertiaryColor}/>
                            </View>
                            <View style={{...styles.starBlock, justifyContent: 'flex-end'}}>
                                <Text>{review.scores.total} Ratings</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.guest}>
                        <View style={{flexDirection: 'row'}}>
                            <ImageBackground
                                source={{uri: users[0].avatar}}
                                style={styles.avatar}
                                imageStyle={{borderRadius: 25}}
                            />
                            <View style={styles.authorRight}>
                                <Text style={styles.name}>{users[0].name}</Text>
                                <Rating
                                    readonly
                                    imageSize={16}
                                    startingValue={users[0].score}
                                />
                            </View>
                            <Text style={styles.time}>{users[0].time}</Text>
                        </View>
                        <View style={styles.reviewContent}>
                            <Text style={{fontSize: 20, fontWeight: '600'}}>{users[0].title}</Text>
                            <Text style={{marginTop: 10}}>{users[0].description}</Text>
                        </View>
                    </View>
                    <View style={styles.guest}>
                        <View style={{flexDirection: 'row'}}>
                            <ImageBackground
                                source={{uri: users[1].avatar}}
                                style={styles.avatar}
                                imageStyle={{borderRadius: 25}}
                            />
                            <View style={styles.authorRight}>
                                <Text style={styles.name}>{users[1].name}</Text>
                                <Rating
                                    readonly
                                    imageSize={16}
                                    startingValue={users[1].score}
                                    starContainerStyle={{backgroundColor: BaseColor.backgroundTertiaryColor}}
                                />
                            </View>
                            <Text style={styles.time}>{users[1].time}</Text>
                        </View>
                        <View style={styles.reviewContent}>
                            <Text style={{fontSize: 20, fontWeight: '600'}}>{users[1].title}</Text>
                            <Text style={{marginTop: 10}}>{users[1].description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    ratingContent: {
        flex: 1,
        flexDirection: 'row',
    },
    score: {
        flex: 25,
        flexDirection: 'column',
        alignItems: 'center',
    },
    ratingDetail: {
        flex: 75,
        flexDirection: 'column',
    },
    starBlock: {
        width: '100%',
        flexDirection: 'row',
    },
    starItem: {
        flex: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    scoreOfStars: {
        marginTop: 3,
        flex: 60,
        height: 5,
        borderRadius: 5,
    },
    guest: {
        marginTop: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 10,
        borderRadius: 7,
        flexDirection: 'column',
        backgroundColor: BaseColor.backgroundTertiaryColor,
    },

    avatar: {
        width: 50,
        height: 50,
        flex: 20
    },
    authorRight: {
        flex: 60,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    time: {
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: 13,
        // marginTop: 10,
        opacity: 0.6
    },
    name: {
        fontSize: 18, fontWeight: '600'
    },
    reviewContent: {
        marginTop: 10
    }

});
export default Review;
