import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>About Screen</Text>
            <Button title='Go Back Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>ProfileScreen</Text>
            <Button title='Go Profile'
            onPress={()=>navigation.navigate('Profile')}/>
            <Text>DwiScreen</Text>
            <Button title='Go Dwi'
            onPress={()=>navigation.navigate('Dwi')}/>
            <Text>SettingScreen</Text>
            <Button title='Go Setting'
            onPress={()=>navigation.navigate('Setting')}/>
            <Text>DefaultScreen</Text>
            <Button title='Go Default'
            onPress={()=>navigation.navigate('Default')}/>
         </View>
    );
};

export default About;