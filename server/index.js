const express = require('express');
const stripe = require('stripe')(
  'sk_test_51Ji8T1AeoijGVDhvKiuor3y4tKOou0mY4fhqtJnqLyQyBXW3lcUoCaLOylxhuGH8AzKKj5sWmo15KezxwFdSWE5B00Fnhfv77W',
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});
app.get('/', (req, res) => {
  res.status(200).json('ok');
});

app.listen(8080, () => console.log('server runing'));
