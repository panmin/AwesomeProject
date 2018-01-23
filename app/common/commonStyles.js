import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const colors = {

};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const commonStyles = StyleSheet.create({
    screenWidth:screenWidth,
    screenHeight:screenHeight,
});

export default commonStyles;