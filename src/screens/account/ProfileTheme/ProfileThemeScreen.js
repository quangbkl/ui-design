import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import {Header, Button, SelectList} from 'components';
import {ThemeColor} from 'config/color';
import useApp from 'hooks/app/useApp';
import ThemeListItem from './ThemeListItem';

const ProfileThemeScreen = () => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n, theme} = appState;
    const {changeTheme} = appActions;

    const [selectedTheme, setSelectedTheme] = useState(theme);

    const handleSelectTheme = (selectedValue) => {
        setSelectedTheme(selectedValue);
    };

    const handlePressButton = async () => {
        await changeTheme(selectedTheme);
    };

    return (
        <Container style={styles.main}>
            <Header title="Theme"/>
            <ScrollView style={{flex: 1}}>
                <SelectList value={selectedTheme} onChange={handleSelectTheme}>
                    {
                        Object.entries(ThemeColor).map(([themeColor, {primaryColor}]) =>
                            <ThemeListItem
                                key={themeColor}
                                value={themeColor}
                                name={themeColor}
                                color={primaryColor}
                            />
                        )
                    }
                </SelectList>
            </ScrollView>
            <Button
                style={styles.buttonApply}
                onPress={handlePressButton}
            >
                {i18n.t('shared.apply')}
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    main: {
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonApply: {
        marginTop: 15,
        marginBottom: 15
    }
});

ProfileThemeScreen.propTypes = {};

export default ProfileThemeScreen;
