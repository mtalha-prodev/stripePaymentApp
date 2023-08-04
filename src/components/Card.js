import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CardField, createToken} from '@stripe/stripe-react-native';
const Card = () => {
  const [cardInfo, setCardInfo] = useState(null);

  const fetchCardDetail = cardDetail => {
    console.log(cardDetail);
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const payDone = async () => {
    if (cardInfo) {
      console.log('card focus info', cardInfo);
      try {
        const token = await createToken({...cardInfo, type: 'Card'});
        console.log('token ', token);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={cardDetails => {
            fetchCardDetail(cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />

        <TouchableOpacity
          style={{
            padding: 10,
            borderRightColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => payDone()}>
          <Text style={{fontSize: 18}}>Done</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Card;
