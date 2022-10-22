import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Dwi = ({navigation}) => {
    return(
        <View>
            <Text>DwiScreen</Text>
            <Button title='Back to About'
            onPress={( )=>navigation.navigate('About')}/>
        </View>
    );
};

export default Dwi;