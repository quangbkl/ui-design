import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Container, List} from 'native-base';
import {Header, Button} from 'components';
import {ThemeColor} from 'config/color';
import useApp from 'hooks/app/useApp';
import ThemeListItem from './ThemeListItem';

const ProfileThemeScreen = () => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n, theme} = appState;
    const {changeTheme} = appActions;

    const [selectedTheme, setSelectedTheme] = useState(theme);

    const handlePressItem = (newTheme) => () => {
        setSelectedTheme(newTheme);
    };

    const handlePressButton = async () => {
        await changeTheme(selectedTheme);
    };

    return (
        <Container style={styles.main}>
            <Header title="Theme"/>
            <ScrollView style={{flex: 1}}>
                <List>
                    {
                        Object.entries(ThemeColor).map(([themeColor, {primaryColor}]) =>
                            <ThemeListItem
                                key={themeColor}
                                name={themeColor}
                                color={primaryColor}
                                checked={themeColor === selectedTheme}
                                onPress={handlePressItem(themeColor)}
                                button
                            />
                        )
                    }
                </List>
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
