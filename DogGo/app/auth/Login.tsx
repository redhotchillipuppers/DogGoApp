import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DogBreeds from '../../constants/DogBreeds';

const LoginScreen: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup and login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogGender, setDogGender] = useState('Boy');
  const [dogAge, setDogAge] = useState(1);

  const handleToggle = (targetSignup: boolean) => {
    if (isSignup !== targetSignup) {
      setIsSignup(targetSignup);
    } else {
      handleAction();
    }
  };

  const handleAction = () => {
    if (isSignup) {
      console.log({ firstName, lastName, email, signupPassword, dogName, dogBreed, dogGender, dogAge });
      // Signup logic here
    } else {
      console.log({ email, password });
      // Login logic here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Welcome to DogGo!</Text>

        {/* Signup Fields */}
        {isSignup && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666"
              value={`${firstName} ${lastName}`.trim()}
              onChangeText={(text) => {
                const [first, ...last] = text.split(' ');
                setFirstName(first);
                setLastName(last.join(' '));
              }}
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
            <Picker
              selectedValue={dogBreed}
              style={styles.picker}
              onValueChange={(itemValue) => setDogBreed(itemValue)}
            >
              {DogBreeds.map((breed) => (
                <Picker.Item
                  key={breed.value}
                  label={breed.label}
                  value={breed.value}
                  color="#333"
                />
              ))}
            </Picker>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setDogGender('Boy')}>
                <Text style={[styles.checkbox, dogGender === 'Boy' && styles.selected]}>Boy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDogGender('Girl')}>
                <Text style={[styles.checkbox, dogGender === 'Girl' && styles.selected]}>Girl</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ageContainer}>
              <TouchableOpacity onPress={() => setDogAge(Math.max(1, dogAge - 1))}>
                <Text style={styles.ageButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.ageText}>{dogAge} years</Text>
              <TouchableOpacity onPress={() => setDogAge(dogAge + 1)}>
                <Text style={styles.ageButton}>+</Text>
              </TouchableOpacity>
            </View>
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
  picker: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  checkbox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    color: '#333',
  },
  selected: {
    backgroundColor: '#ADD8E6',
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  ageButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  ageText: {
    fontSize: 18,
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
});

export default LoginScreen;
