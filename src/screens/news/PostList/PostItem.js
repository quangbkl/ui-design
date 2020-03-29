import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PostItem = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.right}>
          <Text style={styles.name}>Ductt</Text>
          <Text style={styles.extraUser}>5 hours | 100k views</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.largeImage}
          source={{
            uri:
              'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
          }}
        />
        <FontAwesome5Icon style={styles.iconAddToFavorite} name="bookmark" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What is Lorem Ipsum?</Text>
        <Text style={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  right: {
    paddingLeft: 5,
  },
  name: {
    fontSize: 16,
  },
  extraUser: {
    fontSize: 14,
    color: '#8b8b8b',
  },
  imageContainer: {
    marginTop: 10,
  },
  largeImage: {
    width: '100%',
    height: 200,
  },
  iconAddToFavorite: {
    color: '#fff',
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  contentContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
  },
  content: {
    fontSize: 14,
  },
});

export default PostItem;
