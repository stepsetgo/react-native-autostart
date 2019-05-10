
import { NativeModules, Platform } from 'react-native';

const { Autostart } = NativeModules;

export default AutoStart = {
    startAutostartSettings: () => {
        if(Platform.OS === 'android') {
            return Autostart.startAutostartSettings()
        }
    },
    isCustomAndroid: () => {
        if(Platform.OS === 'android') {
            return Autostart.isCustomAndroid
        }
    }
}
