import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from 'assets/Colors';
import Constants from 'assets/Constants';
import Fonts from 'assets/Fonts';
import {currencyFormat} from 'utils/Helper';

const EMIDetails = props => {
  const {monthlyPayment, totalInterest, totalPayment} = props;
  const renderAmountWithLabel = (title, amount) => {
    console.log('props', props);
    return (
      <View style={styles.textContainer}>
        <Text style={styles.monthlyInstallmentText}>{title}</Text>
        <Text style={styles.monthlyAmount}>
          {currencyFormat(parseInt(amount, 0))}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        {renderAmountWithLabel(Constants.LOAN_EMI, monthlyPayment)}
        {renderAmountWithLabel(Constants.TOTAL_INTEREST, totalInterest)}
      </View>
      {renderAmountWithLabel(Constants.TOTAL_PAYMENT, totalPayment)}
    </View>
  );
};
export default EMIDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 25,
    backgroundColor: Colors.primaryColor,
  },
  textContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex: 1
  },
  monthlyInstallmentText: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    textAlign: 'center',
    color: Colors.white,
  },
  monthlyAmount: {
    fontSize: 32,
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    color: Colors.white,
  },
});
