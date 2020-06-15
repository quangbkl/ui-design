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
import {provinces as list} from '../../../constants/location';

const SelectProvinceScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [provinces, setProvinces] = useState(list);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const {route} = props;
        const {params} = Object.assign({}, route);
        const {selected} = Object.assign({}, params);

        if (selected) {
            setProvinces(provinces.map(item => ({
                ...item,
                checked: item.code === selected.code
            })))
        }
    }, []);

    const onChange = (select) => {
        setProvinces(provinces.map(item => ({
            ...item,
            checked: item.code === select.code,
        })));
    };

    const onSave = () => {
        const {route} = props;
        const {params} = Object.assign({}, route);
        const {onChangeLocation} = Object.assign({}, params);
        const selected = provinces.filter(item => item.checked);

        if (selected.length > 0 && onChangeLocation) {
            setLoading(true);

            setTimeout(() => {
                onChangeLocation(selected[0]);
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
                title="Tỉnh, thành phố"
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
                                Chọn
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
                <View style={{width: '100%', height: '100%'}}>
                    <FlatList
                        data={provinces}
                        keyExtractor={(item, index) => item.code}
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

export default SelectProvinceScreen;
