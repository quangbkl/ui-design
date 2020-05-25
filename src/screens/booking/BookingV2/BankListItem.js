import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet } from "react-native";
import { Text } from "native-base";
import { SelectListItemCheck } from "components";

const BankListItem = (props) => {
  const { name, image, ...rest } = props;

  return (
    <SelectListItemCheck leftStyle={{ alignItems: "center" }} {...rest}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={{ marginLeft: 10, position: 'absolute', left: 45 }}>{name}</Text>
    </SelectListItemCheck>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 30,
  },
});

BankListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BankListItem;
