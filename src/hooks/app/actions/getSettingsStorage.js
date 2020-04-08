import AsyncStorage from '@react-native-community/async-storage';
import asyncStorageKey from 'config/async-storage-key';

export default async () => {
    try {
        const value = await AsyncStorage.getItem(asyncStorageKey.settings);
        return JSON.parse(value);
    } catch (e) {
        return {};
    }
};
