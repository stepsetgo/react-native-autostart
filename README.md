# react-native-autostart
[![](https://img.shields.io/npm/v/react-native-autostart.svg)](https://www.npmjs.com/package/react-native-autostart)
[![](https://img.shields.io/snyk/vulnerabilities/npm/react-native-autostart.svg)]()
[![](https://img.shields.io/npm/dependency-version/react-native-autostart/peer/react-native.svg)]()
[![](https://img.shields.io/bundlephobia/min/react-native-autostart.svg)]()
[![](https://img.shields.io/npm/l/react-native-autostart.svg)]()


## Getting started

```
# npm

npm install react-native-autostart --save
```

### Automatic Installation

`$ react-native link react-native-autostart`

### Manual Installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.ssg.autostart.AutostartPackage;` to the imports at the top of the file
  - Add `new AutostartPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-autostart'
  	project(':react-native-autostart').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-autostart/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-autostart')
  	```


## Usage
```javascript
import AutoStart from 'react-native-autostart';

if(AutoStart.isCustomAndroid()) {
	AutoStart.startAutostartSettings();
}
```
