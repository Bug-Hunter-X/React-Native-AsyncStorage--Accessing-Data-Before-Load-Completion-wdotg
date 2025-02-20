// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const DataScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (value !== null) {
          setData(value);
        }
      } catch (e) {
        // handle error
        console.error('Error loading data:', e);
      }
    };

    loadData();
  }, []);

  return (
    <View>
      {data !== null ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default DataScreen;