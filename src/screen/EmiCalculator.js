import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import Constants from 'assets/Constants';
import InputBox from 'components/InputBox';
import EMIDetails from 'components/EMIDetails';

const EmiCalculator = () => {
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [amount, setAmount] = useState('0');
  const [results, setResults] = useState({
    monthlyPayment: '0',
    totalPayment: '0',
    totalInterest: '0',
  });

  const getResult = useCallback(() => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interestRate) / 100 / 12;
    const calculatedPayments = Number(term);
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
      });
    }
  }, [amount, interestRate, term, setResults]);

  const onInterestRateChange = value => {
    setInterestRate(value);
  };

  const onTermChange = value => {
    setTerm(value);
  };

  const onAmountChange = value => {
    setAmount(value.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    getResult();
    console.log('Do something after counter has changed', amount);
  }, [amount, interestRate, term, getResult]);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
        <InputBox
          label={Constants.ENTER_AMOUNT}
          inputType={'textInput'}
          keyboardType={'numeric'}
          value={amount}
          onChangeValue={onAmountChange}
          maxLength={10}
        />
        <InputBox
          label={Constants.INTEREST_RATE}
          inputType={'slideBar'}
          value={interestRate}
          onChangeValue={onInterestRateChange}
          step={1}
          maximumValue={20}
        />
        <InputBox
          label={Constants.TERM}
          inputType={'slideBar'}
          value={term}
          valueDisplayText={term + (term === 1 ? ' Month' : ' Months')}
          onChangeValue={onTermChange}
          step={1}
          minimumValue={1}
          maximumValue={60}
        />
      </View>
      <EMIDetails
        monthlyPayment={results.monthlyPayment}
        totalInterest={results.totalInterest}
        totalPayment={results.totalPayment}
      />
    </View>
  );
};
export default EmiCalculator;
