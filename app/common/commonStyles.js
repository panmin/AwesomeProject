import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const colors = {

};


const commonStyles = StyleSheet.create({
    window:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
});

export default commonStyles;