import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

    const [view,setView]=useState(0)


    return (
        <View>
            <View className='self-start'>
                <Text className='flex p-1 border border-blue-800  rounded-xl bg-white shadow-slate-500'>DashBoard</Text>
            </View>
            <View className='flex flex-row gap-3'>
                <Pressable className='mt-2 flex p-2 border border-gray-600 bg-blue-600 rounded-3xl'>
                    <Text>All Items</Text>
                </Pressable>

                <Pressable className='mt-2 flex p-2 border border-gray-600 bg-blue-500 rounded-3xl'>
                    <Text>Low Stock</Text>
                </Pressable>

                <Pressable className='mt-2 flex p-2 border border-gray-600 bg-blue-500 rounded-3xl'>
                    <Text>Create</Text>
                </Pressable>
                <Pressable className='mt-2 flex p-2 border border-gray-600 bg-blue-500 rounded-3xl'>
                    <Text>paste</Text>
                </Pressable>
            </View>

            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})