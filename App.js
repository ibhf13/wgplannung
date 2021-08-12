import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';

const image = {uri: 'https://picsum.photos/200/300?grayscale'};

const App: () => Node = () => {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = event => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks valid!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

  return (
    <View style={styles.body}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.foto}>
        <View style={styles.foto}>
          <Text style={styles.text}> Welcome to </Text>
          <Text style={styles.text}>The Nut Hause!!!</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input2}
            placeholder="please Enter your E-mail"
            onChange={validateEmail}
          />
          <TextInput
            style={styles.input2}
            placeholder="Please Enter your PW"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              title="Signup"
              onPress={() => Alert.alert('signup pressed')}
            />
            <Button
              title="login"
              onPress={() => Alert.alert('login pressed')}
              mode="contained"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => Alert.alert('forget Password')}
              title="forget Password"
              color="#FF3D00"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    color: '#ff7f50',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  customBtnText: {
    fontSize: 40,
    fontWeight: '400',
    color: '#fff',
  },
  foto: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
