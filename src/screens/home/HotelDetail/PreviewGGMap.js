import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, SafeAreaView} from 'react-native';
import {
    Card,
    CardItem,
    ListItem,
    Left,
    Icon,
    Body,
    Right,
    List,
    Button,
} from 'native-base';
import MapView, {PROVIDER_DEFAULT, Marker} from 'react-native-maps';
import {Text as CText} from 'components';
import {BaseColor} from 'config/color';
import ggmapServices from 'services/ggmapServices';
import {useNavigation} from '@react-navigation/native';
import { getRouterParam } from "helpers/common";

const rad = x => {
    return (x * Math.PI) / 180;
};

const getDistance = (p1, p2) => {
    let R = 6378137;
    let dLat = rad(p2.latitude - p1.latitude);
    let dLong = rad(p2.longitude - p1.longitude);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.latitude)) *
            Math.cos(rad(p2.latitude)) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return Math.round((d / 1000) * 100) / 100;
};

const PreviewGGMap = props => {
    const location = getRouterParam(props, "location");
    const [nearlyOfCurrent, setNearlyOfCurrent] = useState([]);
    const [currCoordinate, setCurrCoordinate] = useState(location);
    const navigation = useNavigation();
    useEffect(() => {
        ggmapServices
            .getNearByPlace(location.latitude, location.longitude)
            .then(res => {
                const {
                    data: {results},
                } = res;
                const actualResults = results.map(el => ({
                    name: el.name,
                    location: {
                        latitude: el.geometry.location.lat,
                        longitude: el.geometry.location.lng,
                    },
                }));
                setNearlyOfCurrent(actualResults);
            })
            .catch(console.log)
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.content}>
                <MapView
                    region={{
                        ...currCoordinate,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                    style={styles.map}
                    provider={PROVIDER_DEFAULT}>
                    <Marker coordinate={currCoordinate} />
                </MapView>
                <Button
                    onPress={() => setCurrCoordinate(location)}
                    style={styles.buttonViewMap}>
                    <CText body2 whiteColor>
                        Vị trí ban đầu
                    </CText>
                </Button>
                <Button
                    onPress={() => navigation.goBack()}
                    style={styles.buttonBack}>
                    <CText body2 whiteColor>
                        Trở lại
                    </CText>
                </Button>
            </View>
            <View style={{flex: 1}}>
                <Card>
                    <CardItem>
                        <Text>Địa điểm nổi bật lân cận</Text>
                    </CardItem>
                </Card>
                <List>
                    <ScrollView>
                        {nearlyOfCurrent.map(el => (
                            <ListItem
                                key={el.name}
                                onPress={() => setCurrCoordinate(el.location)}>
                                <Left>
                                    <Icon
                                        name="pushpin"
                                        style={styles.icon}
                                        type="AntDesign"
                                    />
                                    <Body>
                                        <Text style={styles.title}>
                                            {el.name}
                                        </Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Text style={styles.subTitle}>
                                        {getDistance(el.location, location)} km
                                    </Text>
                                </Right>
                            </ListItem>
                        ))}
                    </ScrollView>
                </List>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFill,
        flex: 1,
        height: 350,
    },
    container: {
        flex: 1,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
    },
    icon: {
        fontSize: 20,
        color: BaseColor.bluePrimaryColor,
    },
    title: {
        fontSize: 15,
    },
    subTitle: {
        fontSize: 14,
        color: BaseColor.grayColor,
    },
    buttonViewMap: {
        paddingLeft: 10,
        paddingRight: 10,
        bottom: 3,
        right: 3,
        height: 30,
        position: 'absolute',
        backgroundColor: '#000',
        borderRadius: 4,
    },
    buttonBack: {
        paddingLeft: 10,
        paddingRight: 10,
        bottom: 3,
        left: 3,
        height: 30,
        position: 'absolute',
        backgroundColor: '#000',
        borderRadius: 4,
    },
});

export default PreviewGGMap;
