import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Link } from 'expo-router';
import { useEffect, useState, useRef } from 'react';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import ListenButton from "@/components/listen-button";

export default function Index() {
  
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    loadAudio();
  }, []);

  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DoNotMix,
    interruptionModeAndroid: InterruptionModeAndroid.DoNotMix
  })

  const handlePress = () => {
    switch (playing) {
      case false:
        playAudio();
        break;
      case true:
        pauseAudio();
        break;
    }
  }

  async function playAudio() {
    if (loaded) {
      await sound.current.playAsync();
      setPlaying(true);
    }
  }

  async function pauseAudio() {
    if (loaded) {
      await sound.current.pauseAsync();
      setPlaying(false);
    }
  }

  async function loadAudio() {
    setLoading(true);
    const result = await sound.current.loadAsync({uri: "https://stream.wusb.stonybrook.edu:8092/listen.pl"})
    if (result.isLoaded === false) {
      setLoading(false);
      console.log('Error in Loading Audio');
    } else {
      setLoading(false);
      setLoaded(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/WUSB.png')} style={styles.image} />
      </View>
      {/* <Link href="/about" style={styles.button}>
        Go To About Screen
      </Link> */}
      <View style={styles.buttonContainer}>
        <ListenButton onPress={handlePress} playing={playing} loading={loading}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243344',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    //backgroundColor: '#ffffff'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#99ffff'
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 30,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 18,
  }
});
