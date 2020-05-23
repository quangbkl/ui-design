import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'native-base';
import appRoutes from 'navigations/appRoutes';
import {Text, TextInput} from 'components';
import useApp from 'hooks/app/useApp';

const MenuItem = ({icon, text, onClick}) => {
    const {state: appState} = useApp();
    const {color} = appState;

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
                    justifyContent: 'center'
                }}
                onPress={onClick}
            >
                <FontAwesome5Icon name={icon} size={20} color={color.primaryColor} solid/>
            </Button>
            <Text style={{color: color.grayColor, fontSize: 13}}>{text}</Text>
        </Col>
    );
};

const SearchMenu = (props) => {
    const {state: appState} = useApp();
    const {color} = appState;

    const {navigation} = props;

    const mainStyle = [
        styles.main,
        {
            backgroundColor: color.backgroundColor,
            borderColor: color.dividerColor
        }
    ];

    return (
        <View style={mainStyle}>
            <TextInput style={styles.textInput} placeholder="What're you locking for ?"/>

            <View style={{marginTop: 10}}>
                <Grid>
                    <Row style={{marginBottom: 10}}>
                        <MenuItem
                            text="Hotel"
                            icon="calendar-alt"
                            onClick={() => navigation.navigate(appRoutes.SEARCH_HOTEL)}
                        />
                        <MenuItem
	                        text="Tour"
	                        icon="map-marker-alt"
	                        onClick={() => navigation.navigate(appRoutes.TOURS)}
                        />
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
        borderWidth: 1
    },
    textInput: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 17
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchMenu;
