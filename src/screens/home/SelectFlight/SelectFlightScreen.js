import React, {useState, useEffect} from 'react';
import {
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import useApp from '../../../hooks/app/useApp';
import Text from '../../../components/Text/Text';
import Image from '../../../components-v2/Image/Image';

const FlightBrandData = [
    {
        id: '1',
        name: 'United State',
        value: 'USA',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png'
    },
    {
        id: '2',
        name: 'Singapore',
        value: 'SIN',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png'
    },
    {
        id: '3',
        name: 'Sydney',
        value: 'SYN',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f10612db015857fc3da8a25c18b6ab14/airlines-emirates.png'
    }
];

const SelectFlightScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [airplane, setAirplane] = useState('');
    const [flight, setFlight] = useState(FlightBrandData);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const {route} = props;
        const {params} = Object.assign({}, route);
        const {selected} = Object.assign({}, params);

        if (selected) {
            setFlight(flight.map(item => {
                return {
                    ...item,
                    checked: item.value === selected.value
                };
            }));
        }
    }, []);

    const onChange = (select) => {
        setFlight(flight.map(item => {
            if (item.value === select.value) {
                return {
                    ...item,
                    checked: true
                };
            } else {
                return {
                    ...item,
                    checked: false
                };
            }
        }));
    };

    const onSave = () => {
        const {route} = props;
        const {params} = Object.assign({}, route);
        const {onChangeAir} = Object.assign({}, params);
        const selected = flight.filter(item => item.checked);

        if (selected.length > 0 && onChangeAir) {
            setLoading(true);

            setTimeout(() => {
                onChangeAir(selected[0]);
                navigation.goBack();
            }, 500);
        }
    };

    const styles = StyleSheet.create({
        textInput: {
            height: 46,
            backgroundColor: colors.fieldColor,
            borderRadius: 5,
            padding: 10,
            width: '100%'
        },
        contain: {
            alignItems: 'center',
            padding: 20,
            width: '100%'
        },
        item: {
            paddingTop: 15,
            paddingBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.fieldColor
        },
        imageBrand: {
            width: 32,
            height: 32,
            marginRight: 10
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Airplane"
                renderLeft={() => {
                    return (
                        <Icon
                            name="arrow-left"
                            size={20}
                            color={colors.primaryColor}
                        />
                    );
                }}
                renderRight={() => {
                    if (loading) {
                        return (
                            <ActivityIndicator
                                size="small"
                                color={colors.primaryColor}
                            />
                        );
                    } else {
                        return (
                            <Text headline primaryColor>
                                Save
                            </Text>
                        );
                    }
                }}
                onPressLeft={() => {
                    navigation.goBack();
                }}
                onPressRight={() => onSave()}
            />
            <View style={styles.contain}>
                <TextInput
                    style={BaseStyle.textInput}
                    onChangeText={text => setAirplane(text)}
                    autoCorrect={false}
                    placeholder="Search Airplane"
                    placeholderTextColor={colors.grayColor}
                    value={airplane}
                    selectionColor={colors.primaryColor}
                />
                <View style={{width: '100%', height: '100%'}}>
                    <FlatList
                        data={flight}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => onChange(item)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        style={styles.imageBrand}
                                        source={{uri: item.image}}
                                        resizeMode="contain"
                                    />
                                    <Text body1>{item.name}</Text>
                                </View>
                                {item.checked && (
                                    <Icon
                                        name="check"
                                        size={14}
                                        color={colors.primaryColor}
                                    />
                                )}
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SelectFlightScreen;
