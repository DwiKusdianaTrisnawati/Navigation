
import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Title, Card} from 'react-native-paper';
import {MaterialIcons} from 'react-native-vector-icons';
import Karyawan from './Karyawan';

const Detail = ({navigation, route}) => {
    const {Karyawan} = route.params
    return (
        <View style={{flex:1}}>
            <LinearGradient colors={["#0033ff","#6bc1ff"]} style={{height:"20%"}} />
            <View syle={{alignItems:"center"}}>
                <Image style={{width:120, height:120, borderRadius:120/2, marginTop:-50}}
                source={{uri: Karyawan.foto}} />
            </View>
            <View style={{alignItems:"center", margin:15}}>
                <Title>{Karyawan.nama}</Title>
                <Text style={{fontSize:14}}>{Karyawan.jabatan}</Text>
            </View>
            <Card style={{magin:3}}
                onPress={()=>{Linking.openURL('mailto:${Karyawan.email}')}} >
                <View style={{flexDirection:'row', padding:8}}>
                    {/* <Entypo name="phone" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{Karyawan.email}</Text>
                </View>
            </Card>
            <Card style={{margin:3}}
                onPress={()=>{Linking.openURL('tel:${Karyawan.telp')}}>
                <View style={{flexDirection:'row', padding:8}}>
                    {/* <MaterialIcons name="attach-money" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{Karyawan.telp}</Text>
                </View>
            </Card>
            <Card style={{margin:3}}>
                <View style={{flexDirection:'row', padding:8}}>
                    {/* <MaterialIcons name="attach-money" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{Karyawan.gaji}</Text>
                </View>
            </Card>
            <View style={{padding:10}}>
                <Button title='GO BACK' onPress={()=>navigation.navigate('Home')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teks:{
        fontSize:15,
        marginTop:3,
        marginLeft:5
    }
});
export default Detail;