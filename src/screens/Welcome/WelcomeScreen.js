import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import WelcomeItem from './WelcomeItem';
import colors from '../../configs/colors';

const slides = [
    {
        key: 'welcome1',
        title: 'Welcome Smart Home',
        text: 'Description 1',
    },
    {
        key: 'welcome2',
        title: 'Control Everything',
        text: 'Description 2',
    },
    {
        key: 'welcome3',
        title: 'User Interface',
        text: 'Description 3',
    },
    {
        key: 'welcome4',
        title: 'Smart Control',
        text: 'Description 4',
    },
];

class WelcomeScreen extends React.Component {
    _renderItem = props => {
        const {navigation} = this.props;
        return <WelcomeItem {...props} navigation={navigation}/>;
    };

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderItem={this._renderItem}
                showNextButton={false}
                showDoneButton={false}
            />
        );
    }
}

export default WelcomeScreen;
