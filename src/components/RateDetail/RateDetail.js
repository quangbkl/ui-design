import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import useApp from '../../hooks/app/useApp';

const RateDetail = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        contain: {
            flexDirection: 'row',
            width: '100%',
            height: 85
        },
        contentLeft: {
            flex: 3.5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        containRight: {
            flex: 6.5,
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        starLeft: {
            flex: 3.5,
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        lineStar: {
            height: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        containStatus: {flex: 6.5, justifyContent: 'center'},
        contentLineStatus: {
            height: 10,
            justifyContent: 'center',
            marginLeft: 10
        },
        lineStatusGray: {
            height: 3,
            width: '100%',
            borderRadius: 1.5,
            backgroundColor: colors.fieldColor
        },
        lineStatusPrimary: {
            height: 3,
            width: '10%',
            borderTopLeftRadius: 1.5,
            borderBottomLeftRadius: 1.5,
            backgroundColor: colors.primaryColor,
            position: 'absolute'
        }
    });

    const {style, point, maxPoint, totalRating, data} = props;

    return (
        <View style={[styles.contain, style]}>
            <View style={styles.contentLeft}>
                <Text primaryColor style={{fontSize: 48}}>
                    {point}
                </Text>
                <Text subhead grayColor semibold>
                    out of {maxPoint}
                </Text>
            </View>
            <View style={styles.containRight}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.starLeft}>
                        <View style={styles.lineStar}>
                            {[1, 2, 3, 4, 5].map((icon, index) => {
                                return (
                                    <Icon
                                        key={`star5` + index}
                                        name="star"
                                        color={colors.grayColor}
                                        solid
                                        size={8}
                                    />
                                );
                            })}
                        </View>
                        <View style={styles.lineStar}>
                            {[1, 2, 3, 4].map((icon, index) => {
                                return (
                                    <Icon
                                        key={`star4` + index}
                                        name="star"
                                        color={colors.grayColor}
                                        solid
                                        size={8}
                                    />
                                );
                            })}
                        </View>
                        <View style={styles.lineStar}>
                            {[1, 2, 3].map((icon, index) => {
                                return (
                                    <Icon
                                        key={`star3` + index}
                                        name="star"
                                        color={colors.grayColor}
                                        solid
                                        size={8}
                                    />
                                );
                            })}
                        </View>
                        <View style={styles.lineStar}>
                            {[1, 2].map((icon, index) => {
                                return (
                                    <Icon
                                        key={`star2` + index}
                                        name="star"
                                        color={colors.grayColor}
                                        solid
                                        size={8}
                                    />
                                );
                            })}
                        </View>
                        <View style={styles.lineStar}>
                            <Icon
                                name="star"
                                color={colors.grayColor}
                                solid
                                size={8}
                            />
                        </View>
                    </View>
                    <View style={styles.containStatus}>
                        {data.map((percent, index) => {
                            return (
                                <View
                                    style={styles.contentLineStatus}
                                    key={'status' + index}
                                >
                                    <View style={styles.lineStatusGray}/>
                                    <View
                                        style={[
                                            styles.lineStatusPrimary,
                                            {width: percent}
                                        ]}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>
                <Text body2 semibold>
                    {totalRating} Ratings
                </Text>
            </View>
        </View>
    );
};

RateDetail.propTypes = {
    style: PropTypes.object,
    point: PropTypes.number,
    maxPoint: PropTypes.number,
    totalRating: PropTypes.number,
    data: PropTypes.array
};

RateDetail.defaultProps = {
    style: {},
    point: 0,
    maxPoint: 5,
    totalRating: 0,
    data: ['0%', '5%', '35%', '40%', '10%']
};

export default RateDetail;
