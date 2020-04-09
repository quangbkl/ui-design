import AsyncStorage from '@react-native-community/async-storage';
import asyncStorageKey from 'config/async-storage-key';
import getSettingsStorage from './getSettingsStorage';

export default async settings => {
    const storageSettings = await getSettingsStorage();
    const value = JSON.stringify({...storageSettings, ...settings});
    await AsyncStorage.setItem(asyncStorageKey.settings, value);
};
