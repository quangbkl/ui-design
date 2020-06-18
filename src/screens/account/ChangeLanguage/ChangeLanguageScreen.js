import React, {useState} from 'react';
import {
    Text,
    Header,
    Touchable,
    CustomIcon,
} from 'components';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';
import useApp from "../../../hooks/app/useApp";

const LanguageData = [
    {
        id: '1',
        language: 'English',
        locale: 'en',
        checked: true,
    },
    {id: '2', language: 'Vietnames', locale: 'vi'},
    {id: '3', language: 'Japanes', locale: 'ja'},
    {id: '4', language: 'Korean', locale: 'ko'},
];

const ChangeLanguageScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const currentLang = 'en';
    const [language, setLanguage] = useState(LanguageData.map(lang => {
        return {
            ...lang,
            checked: lang.locale === currentLang,
        };
    }));

    const onChange = (select) => {
        setLanguage(language.map(lang => {
            if (lang.language === select.language) {
                return {
                    ...lang,
                    checked: true,
                };
            } else {
                return {
                    ...lang,
                    checked: false,
                };
            }
        }));
    };

    const styles = StyleSheet.create({
        textInput: {
            height: 46,
            backgroundColor: colors.backgroundSecondaryColor,
            borderRadius: 5,
            padding: 10,
            width: '100%',
        },
        contain: {
            alignItems: 'center',
            padding: 20,
            width: '100%',
        },
        item: {
            paddingTop: 15,
            paddingBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.backgroundSecondaryColor,
        },
    });

    const renderListItem = ({item}) => {
        return (
            <Touchable
                style={styles.item}
                onPress={() => onChange(item)}
            >
                <Text
                    body1
                    style={
                        item.checked
                            ? {
                                color:
                                colors.primaryColor,
                            }
                            : {}
                    }
                >
                    {item.language}
                </Text>
                {item.checked && (
                    <CustomIcon
                        name="check"
                        size={14}
                        color={colors.primaryColor}
                    />
                )}
            </Touchable>
        );
    };

    const HeaderRightComponent = () => {
        return (
            <Text headline primaryColor>
                Save
            </Text>
        );
    };

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.backgroundPrimaryColor}}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Change Language"
                RightComponent={<HeaderRightComponent/>}
            />
            <ScrollView>
                <View style={styles.contain}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search Country"
                    />
                    <View style={{width: '100%', height: '100%'}}>
                        <FlatList
                            data={language}
                            keyExtractor={item => item.id}
                            renderItem={renderListItem}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangeLanguageScreen;
