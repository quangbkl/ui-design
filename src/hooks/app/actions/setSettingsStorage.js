import AsyncStorage from '@react-native-community/async-storage';
import asyncStorageKey from 'config/async-storage-key';

export default async (settings) => {
    const value = JSON.stringify(settings);
    await AsyncStorage.setItem(asyncStorageKey.settings, value);
};
