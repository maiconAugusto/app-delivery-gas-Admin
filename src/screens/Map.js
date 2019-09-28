import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import  MapViewDirection from 'react-native-maps-directions'
import Key from '../config/Key'

const MapClient = ({navigation})=>{
    return(
        <View style={styles.container}>
            <MapView
            style={styles.maps}
            region = {{ latitude : navigation.getParam('latitude'),
                        longitude: navigation.getParam('longitude'),
                        latitudeDelta: 0.015,
                        longitudeDelta:0.0121 }}>

            <Marker coordinate={{latitude : navigation.getParam('latitude'),
                                longitude:navigation.getParam('longitude')}}
                                title={navigation.getParam('name')}
                                description="LOCALIZAÇÃO DE ENTREGA"/>

            <Marker coordinate={{latitude : -22.5127294,
                                longitude: -55.7243132 }}
                                title="SPEED GAS"
                                pinColor="green"
                                description="DELIVERY"/>
            
            <MapViewDirection origin={{
                    latitude : -22.5127294,
                    longitude: -55.7243132
                }}
                destination={{
                    latitude : navigation.getParam('latitude'),
                    longitude:navigation.getParam('longitude')
                }}
                apikey={Key}
                strokeWidth={5}
                strokeColor="hotpink"
            />
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }, 
    maps:{
        flex: 1
    }
})
export default MapClient