import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {BaseColor} from '../../../config/color';
import {TextInput, Text} from '../../../components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const MenuItem = ({icon, text}) => {
    return (
        <Col style={styles.menuItem}>
            <View style={{
                height: 35,
                width: 35,
                borderRadius: 35 / 2,
                backgroundColor: BaseColor.fieldColor,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <FontAwesome5Icon name={icon} size={22} color={BaseColor.primaryColor} solid/>
            </View>
            <Text>{text}</Text>
        </Col>
    );
};

const SearchMenu = () => {
    return (
        <View style={styles.main}>
            <TextInput placeholder="What're you locking for ?"/>

            <View style={{height: 150, marginTop: 10}}>
                <Grid>
                    <Row>
                        <MenuItem text="Hotel" icon="calendar-alt"/>
                        <MenuItem text="Tour" icon="map-marker-alt"/>
                        <MenuItem text="Car" icon="car-alt"/>
                        <MenuItem text="Flight" icon="plane"/>
                    </Row>
                    <Row>
                        <MenuItem text="Cruise" icon="ship"/>
                        <MenuItem text="Bus" icon="bus-alt"/>
                        <MenuItem text="Event" icon="star"/>
                        <MenuItem text="More" icon="ellipsis-h"/>
                    </Row>
                </Grid>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: -40,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: BaseColor.dividerColor,
        borderWidth: 1,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchMenu;
