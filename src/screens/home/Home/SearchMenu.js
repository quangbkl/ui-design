import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {BaseColor} from '../../../config/color';
import {TextInput, Text} from '../../../components';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'native-base';

const MenuItem = ({icon, text, onClick}) => {
    return (
        <Col style={styles.menuItem}>
            <Button
                style={{
                    height: 35,
                    width: 35,
                    borderRadius: 35 / 2,
                    elevation: 0,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={onClick}
            >
                <FontAwesome5Icon name={icon} size={20} color={BaseColor.primaryColor} solid/>
            </Button>
            <Text style={{color: BaseColor.grayColor, fontSize: 13}}>{text}</Text>
        </Col>
    );
};

const SearchMenu = () => {
    return (
        <View style={styles.main}>
            <TextInput style={styles.textInput} placeholder="What're you locking for ?"/>

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
        backgroundColor: '#f2f2f2',
        borderColor: BaseColor.dividerColor,
        borderWidth: 1,
    },
    textInput: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 17,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchMenu;
