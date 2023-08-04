/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import Card from './src/components/Card';

function App() {
  const publicKey =
    'pk_test_51Ji8T1AeoijGVDhvTcxHeDYQlMbggeWnvfcmKGeZ1QXzyVhlAeTXL3Te0UvYDzD8PPrrvfhAhphB1X9XfxIf0oyk001ZzRk9Pq';
  const secretKey =
    'sk_test_51Ji8T1AeoijGVDhvKiuor3y4tKOou0mY4fhqtJnqLyQyBXW3lcUoCaLOylxhuGH8AzKKj5sWmo15KezxwFdSWE5B00Fnhfv77W';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StripeProvider
        publishableKey={publicKey}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <Card />
      </StripeProvider>
    </SafeAreaView>
  );
}

export default App;
