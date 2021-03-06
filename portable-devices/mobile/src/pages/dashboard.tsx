import React from "react"
import {StyleSheet, View, Text, ViewStyle} from "react-native"
import { Link } from 'react-router-native';
interface Style {
    container: ViewStyle
}

const Dashboard = () => {
    return(
        <View style={styles.container}>
            <Text>Dashboard Value</Text>
            <Link to={'/org/counter'}><Text>Calendar</Text></Link>
        </View>
    )
}

const styles = StyleSheet.create<Style>({
    container:{
        textAlign: 'center'
    }
})

export default Dashboard;
