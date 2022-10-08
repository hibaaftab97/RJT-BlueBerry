import React from 'react';
import { Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from '../../../units/index';
import { icons } from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import styles from './styles';

const BookTickets = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{ flex: 1 }}>
      <BlurView style={styles.blurViewStyle} blurType="dark" blurAmount={40} />
      <View style={styles.alertMainView}>
        <View style={styles.barViewStyle}></View>

        <View style={styles.checkIconView}>
          <Image
            source={props?.icon ? props?.icon : icons.bookTicket}
            style={styles.checkIconStyle}
          />

          <TextWrapper
            numberOfLines={3}
            style={styles.customAlertHeadingTextStyle}>
            {props?.title
              ? props?.title
              : 'Select the number of tickets'}
            {/* Are you sure you want to remove product from the cart? */}
          </TextWrapper>
          <View style={styles.row}>
            <View >
            <TextWrapper
            // numberOfLines={3}
            style={styles.personTextStyle}>
            Adults / Youth
          </TextWrapper>
          <TextWrapper
            style={styles.personTextStyle}>
            $5
          </TextWrapper>
            </View>
        
            <View style={styles.amountValueView}>
              <TouchableOpacity
                // onPress={incrementValue}
                style={styles.increaseAmountView}>
                <TextWrapper style={styles.icrementTextStyle}>+</TextWrapper>
              </TouchableOpacity>

              <View style={styles.valueView}>
                <TextWrapper style={styles.valueTextStyle}>
                  {/* {props.data?.quantity ? props.data?.quantity : amountValue} */}
                  1
                </TextWrapper>
              </View>

              <TouchableOpacity
                // onPress={decrementValue}
                style={styles.decreaseAmountView}>
                <TextWrapper style={styles.decrementTextStyle}>-</TextWrapper>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.row}>
            <View style={{}}>
            <TextWrapper
            style={styles.personTextStyle}>
            Children (5 and under)
          </TextWrapper>
          <TextWrapper
            style={styles.personTextStyle}>
            Free
          </TextWrapper>
            </View>
        
            <View style={styles.amountValueView}>
              <TouchableOpacity
                // onPress={incrementValue}
                style={styles.increaseAmountView}>
                <TextWrapper style={styles.icrementTextStyle}>+</TextWrapper>
              </TouchableOpacity>

              <View style={styles.valueView}>
                <TextWrapper style={styles.valueTextStyle}>
                  {/* {props.data?.quantity ? props.data?.quantity : amountValue} */}
                  1
                </TextWrapper>
              </View>

              <TouchableOpacity
                // onPress={decrementValue}
                style={styles.decreaseAmountView}>
                <TextWrapper style={styles.decrementTextStyle}>-</TextWrapper>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.choiceButtonView}>
          <SubmitButton
              title="Add to Cart"
              style={styles.noButtonView}
              textStyle={styles.noTextStyle}
              onPress={props?.onHide}
            />
            <SubmitButton
              title="Cancel"
              style={styles.yesButtonView}
              textStyle={styles.yesTextStyle}
              onPress={props?.onPress}
            />

           
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default BookTickets;
