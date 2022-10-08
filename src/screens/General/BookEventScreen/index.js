import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, ImageBackground, LayoutAnimation, ScrollView } from 'react-native';
import { generalImages, icons } from '../../../assets/images';

import TextWrapper from '../../../components/TextWrapper';

import CartContainer from '../../../components/Containers/CartContainer';
import SubmitButton from '../../../components/Buttons/SubmitButton';

import styles from './styles';

import { useListWishlistHook } from '../../../hooks/useListWishlistHook';
import { useFocusEffect } from '@react-navigation/core';

import { useSelector } from 'react-redux';
import { vh, vw } from '../../../units';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import MainContainer from '../../../components/Containers/MainContainer';
import theme from '../../../utils/theme';

const BookEventScreen = props => {
  const navigation = useNavigation();

  const facilities = [{
    name: 'General Admission',
    description: "CAN-USA Cold Storage Inc. was founded in 2011 in affiliation  with R.J.T Blueberry Park Inc, the company is located in British Columbia’s Fraser Valley, near Highway 1 and only 10 minutes away from the US border by truck, which makes it an ideal transportation hub."
  },
  {
    name: 'Event Tickets',
    description: "CAN-USA Cold Storage Inc. was founded in 2011 in affiliation  with R.J.T Blueberry Park Inc, the company is located in British Columbia’s Fraser Valley, near Highway 1 and only 10 minutes away from the US border by truck, which makes it an ideal transportation hub."

  },
  {
    name: 'Private Petting',
    description: "CAN-USA Cold Storage Inc. was founded in 2011 in affiliation  with R.J.T Blueberry Park Inc, the company is located in British Columbia’s Fraser Valley, near Highway 1 and only 10 minutes away from the US border by truck, which makes it an ideal transportation hub."

  },
  ]

  const [defaultIndex, setDefaultIndex] = useState(0);


  const renderSearchHeader = () => {
    return (
      <ImageBackground
        source={generalImages.eventsBG}
        style={styles.searchView}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftArrowIconButton}>
            <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
          </TouchableOpacity>
          <TextWrapper style={styles.searchTextStyle}>Our Events</TextWrapper>

        </View>
      </ImageBackground>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.box}>
        <TextWrapper style={styles.text}>
          {item?.name}
        </TextWrapper>
      </View>
    )
  }

  const handleTabs = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setDefaultIndex(index);
  };

  return (
    <View>
      {renderSearchHeader()}
      <View style={styles.listView}>
        {/* <FlatList
          data={facilities}
          renderItem={renderItem}
          horizontal
          // keyExtractor={(item, index) => item.id}
          // numColumns={2}
          contentContainerStyle={{height:10*vh}}
style={{marginTop:10*vh}}
          // style={styles.listView}
        /> */}
        <View style={{ flexDirection: 'row' }}
        >
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}>
            {facilities.map((item, index) => {
              return (

                <View style={styles.mainTabsView}
                >
                  <TouchableOpacity
                    onPress={() => handleTabs(index)}
                    style={[
                      styles.detailsTabView,
                      { borderWidth: defaultIndex == index ? 0.1 * vw : null },
                    ]}>
                    <TextWrapper
                      style={[
                        styles.detailsTextStyle,
                        {
                          color: defaultIndex == index
                            ? theme.defaultInactiveBorderColor
                            : theme.defaultBackgroundColor,
                        },
                      ]}>

                      {item?.name}
                    </TextWrapper>
                  </TouchableOpacity>


                </View>

              )
            })}
          </ScrollView>
        </View>

        {facilities.map((item, index) => {
          if (defaultIndex == index) {
            return (
              <View style={{ alignItems: 'center', marginTop: 5 * vh }}>

                <TextWrapper
                  style={styles.title}>

                  {item?.name}
                </TextWrapper>
                <View style={styles.detailsBox}>
                  <TextWrapper
                    style={styles.detailsText}>

                    Details
                  </TextWrapper>
                </View>
                <TextWrapper style={styles.des}
                  numberOfLines={20}
                >{item?.description}
                </TextWrapper>

                <SubmitButton
                  style={styles.submitButtonStyle}
                  titleTextStyle={styles.titleTextStyle}
                  title="ONLINE TICKETS"
                />
              </View>
            )
          }

        })}
      </View>
    </View>
  );
};
export default BookEventScreen;
