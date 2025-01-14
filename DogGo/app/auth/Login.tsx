import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { useRouter, Slot, router } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup and login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dogName, setDogName] = useState('');

  const navigation = useNavigation();

  const handleToggle = (targetSignup: boolean) => {
    if (isSignup !== targetSignup) {
      setIsSignup(targetSignup);
    } else {
      handleAction();
    }
  };

  const handleAction = async () => {
    if (isSignup) {
      // Sign-Up Logic with Firebase
      if (!firstName || !lastName || !email || !signupPassword || !dogName) {
        alert('Please fill out all fields.');
        return;
      }
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
      if (signupPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, signupPassword);
        console.log('Sign-Up Successful:', userCredential.user);
        alert('Sign-Up Successful!');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error signing up:', error.message);
        alert(error.message);
      }
    } else {
      // Log-In Logic with Firebase
      if (!email || !password) {
        alert('Please enter your email and password.');
        return;
      }
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Log-In Successful:', userCredential.user);
        alert('Log-In Successful!');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error logging in:', error.message);
        alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Icon/icon png.png')} style={styles.icon} />
      <View style={styles.formBox}>
        <Text style={styles.title}>Welcome to DogGo!</Text>

        {/* Signup Fields */}
        {isSignup && (
          <>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#666"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#666"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              value={signupPassword}
              onChangeText={setSignupPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Dog Name"
              placeholderTextColor="#666"
              value={dogName}
              onChangeText={setDogName}
            />
          </>
        )}

        {/* Login Fields */}
        {!isSignup && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </>
        )}

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google Login')}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Facebook Login')}>
            <FontAwesome name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Apple Login')}>
            <MaterialCommunityIcons name="apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.toggleButton, isSignup ? styles.activeButton : null]}
            onPress={() => handleToggle(true)}
          >
            <Text style={styles.toggleButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isSignup ? styles.activeButton : null]}
            onPress={() => handleToggle(false)}
          >
            <Text style={styles.toggleButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange background (logo orange)
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  formBox: {
    width: '90%',
    padding: 20,
    backgroundColor: '#F9F6EE', // Off-white background for the form
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#ADD8E6',
  },
  toggleButtonText: {
    color: '#333',
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
  },
});

export default LoginScreen;
