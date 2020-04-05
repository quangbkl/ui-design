import AsyncStorage from '@react-native-community/async-storage';
import asyncStorageKey from 'config/async-storage-key';

export default async (value) => {
    await AsyncStorage.setItem(asyncStorageKey.locale, value);
};
