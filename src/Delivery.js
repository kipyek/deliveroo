import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { SparklesIcon } from "react-native-heroicons/solid"
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {
  return (
    <View className='flex-1 bg-[#00CCBB]'>
      <SafeAreaView className='z-50 mt-10'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity>
            <SparklesIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-lg text-white'>Order Help</Text>
        </View>
      </SafeAreaView>

      <View className='z-50 mx-5 my-2 bg-white rounded-md p-6 shadow-md'>
        <View className='flex-row justify-between'>
          <View>
            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
            <Text className='text-4xl font-bold'>45-55 Minutes</Text>
          </View>
          <Image
            source={{ uri: "https://links.papareact.com/fls" }}
            className='h-16 w-16'
          />
        </View>
        <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
        <Text className='mt-3 text-gray-500'>
          Your order at Hoteli is being prepared
        </Text>
      </View>

      <MapView
        initialRegion={{
          latitude: 48.87389506,
          longitude: 2.295039178,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: 48.87389506,
            longitude: 2.295039178,
          }}
          title="Sample"
          description='Sample Location'
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='flex-row h-28 bg-white items-center space-x-5'>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className='h-12 w-12 bg-gray-300 rounded-full ml-5 p-4'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Joe Doe</Text>
          <Text className='text-gray-400'>Your Delivery guy</Text>
        </View>

        <Text className='text-lg text-[#00CCBB] mr-5 font-bold'>Call</Text>
      </SafeAreaView>


    </View>
  )
}

export default Delivery 