import React,{useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import firebase from "firebase"
import _ from 'lodash'

const Home = ()=>{
    const [ shoppings, setShoppings ] = useState('')
    useEffect(()=>{
        async function handleShopping(){
            const response = await firebase.database().ref('/')
                .on('value',snapshot=>{
                    snapshot.forEach(function(childSnapshot){
                        var childData = childSnapshot.val()
                            setShoppings(childData)
                                console.log(childData)
                    })
                })
        }
        handleShopping()
    },[])
    function handlePedidos(item){
        return(
            <Text>{item.request_date}</Text>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={shoppings}
            renderItem={({item})=> handlePedidos(item)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column'
    }
})
export default Home