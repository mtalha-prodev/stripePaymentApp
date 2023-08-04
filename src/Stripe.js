import {View, Text} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Card from './components/Card';
const Stripe = () => {
  const publicKey =
    'pk_test_51Ji8T1AeoijGVDhvTcxHeDYQlMbggeWnvfcmKGeZ1QXzyVhlAeTXL3Te0UvYDzD8PPrrvfhAhphB1X9XfxIf0oyk001ZzRk9Pq';
  const secretKey =
    'sk_test_51Ji8T1AeoijGVDhvKiuor3y4tKOou0mY4fhqtJnqLyQyBXW3lcUoCaLOylxhuGH8AzKKj5sWmo15KezxwFdSWE5B00Fnhfv77W';
  return (
    <View>
      <StripeProvider
        publishableKey={publicKey}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <Card />
      </StripeProvider>
    </View>
  );
};

export default Stripe;
