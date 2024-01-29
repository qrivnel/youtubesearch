/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View } from 'react-native';


const API_KEY = 'AIzaSyDhOXbKN9axvZq-099-zmWQeN-hzNK8C9A';

function App(): JSX.Element {
  const [videos, setVideos] = useState<any>([])
  const search = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=ezhel&type=music&key=${API_KEY}`)
    .then(res=>res.json())
    .then(data => {
      // data.items.map((item: any, index: number) => {
      //   console.log(`${index + 1}: ${item.snippet.title} \n`);
      // })
      console.log(data);
      
    })
  }

useEffect(()=>{
  search()
}, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      
    </SafeAreaView>
  );
}

export default App;
