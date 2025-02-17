import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  onPress?: () => void;
  playing: boolean;
  loading: boolean;
};

export default function ListenButton({ onPress, playing, loading }: Props) {
  if (!playing) {
    return (
      <View style={[
        styles.buttonContainer,
        { borderWidth: 6, borderColor: '#fff', borderRadius: 18 },
      ]}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome name="play-circle" size={18} style={styles.buttonIcon}/>
        <Text style={styles.buttonLabel}>Listen Now</Text>
      </Pressable>
    </View>
    )
  }
  if (playing) {
    return (
      <View style={[
      styles.buttonContainer,
      { borderWidth: 6, borderColor: '#fff', borderRadius: 18 },
    ]}>
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name="pause-circle" size={18} style={styles.buttonIcon}/>
      <Text style={styles.buttonLabel}>Playing</Text>
    </Pressable>
  </View>
    )
  }
  if (loading) {
    return (
      <View style={[
      styles.buttonContainer,
      { borderWidth: 6, borderColor: '#fff', borderRadius: 18 },
    ]}>
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name="pause-circle" style={styles.buttonIcon}/>
      <Text style={styles.buttonLabel}>Loading...</Text>
    </Pressable>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9D2830'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
  },
  buttonIcon: {
    paddingRight: 8,
    color: '#fff',
    fontSize: 30
  },
});