import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {BaseColor} from 'config/color';
import Touchable from '../Touchable/Touchable';

const LeftComponent = () => {
  const navigation = useNavigation();
  return (
    <Touchable onPress={() => navigation.goBack()}>
      <FontAwesome5Icon
        name="arrow-left"
        color={BaseColor.primaryColor}
        size={18}
      />
    </Touchable>
  );
};
const BodyComponent = ({title, description}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{title}</Text> : null}
    </View>
  );
};

const Header = props => {
  const {title, description, ItemLeft, ItemRight, ItemBody} = props;

  return (
    <View style={styles.container}>
      <View>{ItemLeft === undefined ? <LeftComponent /> : ItemLeft}</View>
      <View>
        {ItemBody === undefined ? (
          <BodyComponent title={title} description={description} />
        ) : (
          ItemBody
        )}
      </View>
      <View>{ItemRight || null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseColor.fieldColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: BaseColor.grayColor,
    textAlign: 'center',
  },
});

Header.propTypes = {
  title: PropTypes.element,
  description: PropTypes.element,
  ItemLeft: PropTypes.element,
  ItemRight: PropTypes.element,
  ItemBody: PropTypes.element,
};

export default Header;
