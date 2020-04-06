import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, List, ListItem, Text, Left, Right} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header} from 'components';
import {BaseColor, ThemeColor} from 'config/color';
import useApp from 'hooks/app/useApp';

const ThemeListItem = (props) => {
    const {name, color, checked} = props;

    return (
        <ListItem style={styles.listItem}>
            <Left style={{alignItems: 'center'}}>
                <View style={{width: 15, height: 15, backgroundColor: color}}/>
                <Text style={{marginLeft: 10}}>{name}</Text>
            </Left>
            {checked && <Right><FontAwesome5 name="check" size={18} color={BaseColor.primaryColor}/></Right>}
        </ListItem>
    );
};

const ProfileThemeScreen = () => {
    const {state: appState} = useApp();
    const {theme} = appState;

    return (
        <Container>
            <Header title="Theme"/>
            <List style={styles.list}>
                {
                    Object.entries(ThemeColor).map(([themeColor, {primaryColor}]) =>
                        <ThemeListItem
                            name={themeColor}
                            color={primaryColor}
                            checked={themeColor === theme}
                        />
                    )
                }
            </List>
        </Container>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingLeft: 20,
        paddingRight: 20
    },
    listItem: {
        marginLeft: 0,
        paddingRight: 0
    }
});

ProfileThemeScreen.propTypes = {};

export default ProfileThemeScreen;
