import { Text, View, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>For questions & comments on programming or any other inquiries, email our Program Director at pd.wusbradio@gmail.com
      {'\n'}
      {'\n'}
Call the station at 631-632-6901
{'\n'}
{'\n'}
Email music to
md.wusbradio@gmail.com or send to the address below
{'\n'}
{'\n'}
WUSB Radio
{'\n'}
Attn: Music Director
{'\n'}
2nd Floor West Side Dining
{'\n'}
Stony Brook University
{'\n'}
Stony Brook, NY 11794-3200
</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
});