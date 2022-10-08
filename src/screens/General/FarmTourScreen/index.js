import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Image,Dimensions, FlatList, ImageBackground, LayoutAnimation, ScrollView } from 'react-native';
import { generalImages, icons } from '../../../assets/images';

import TextWrapper from '../../../components/TextWrapper';
import BookTickets from '../../../components/Modals/BookTickets';

import CartContainer from '../../../components/Containers/CartContainer';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';

import { useListWishlistHook } from '../../../hooks/useListWishlistHook';
import { useFocusEffect } from '@react-navigation/core';

import { useSelector } from 'react-redux';
import { vh, vw } from '../../../units';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import MainContainer from '../../../components/Containers/MainContainer';
import theme from '../../../utils/theme';

const FarmTourScreen = props => {
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
  const windowWidth = Dimensions.get('window').width;
  const [visibility, setVisibility] = useState(false);

  const [defaultIndex, setDefaultIndex] = useState(0);

  const carousel = [
    {
      
      image: generalImages.video
    }, {
      
      image: generalImages.video
    },
    {
      image: generalImages.video
    },
  ]
  const [activeSlide, setActiveSlide] = useState(1);


  const renderSearchHeader = () => {
    return (
      <View
        style={styles.searchView}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftArrowIconButton}>
            <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
          </TouchableOpacity>
          <TextWrapper style={styles.searchTextStyle}>Farm Tours</TextWrapper>

        </View>
      </View>
    );
  };
  const renderSlideBanner = () => {
    return (
      <View style={{ height: 50 * vh }}>
        <Carousel
          // data={homeDataState}
          data={carousel}
          renderItem={_renderItem}
          sliderWidth={windowWidth + 1}
          itemWidth={100 * vw}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
          // keyExtractor={(item, index) => item.images + Math.random()}
        // keyExtractor={(item, index) => item.id + index + Math.random()}
        // loop={true}
        autoplay={true}
        />
         {pagination()}
      </View>
    );
  };
const _renderItem=({item,index})=>{
  return(
    <Image  source={item.image}
    style={styles.car}/>
  )
}
  const handleTabs = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setDefaultIndex(index);
  };
  const handleVisibility = () => {
    setVisibility(!visibility);
  };
  const pagination = () => {
    return (
      <Pagination
        // dotsLength={homeDataState?.length}
        dotsLength={3}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStylePagination}
        dotStyle={styles.dotStylePagination}
        inactiveDotStyle={styles.inactiveDotStylePagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <MainContainer  style={{backgroundColor:'white'}}>
      <ScrollWrapper   avoidKeyboard={true}
        style={styles.scroll}>
      {renderSearchHeader()}

      <View style={styles.listView}>
      
          <Image source={generalImages.farmTour}
            style={styles.headerImage} />
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

                  <TextWrapper style={styles.des}
                    numberOfLines={20}
                  >{item?.description}
                  </TextWrapper>

                  <SubmitButton
        onPress={handleVisibility}

                    // onPress={() => props.navigation.navigate('ViewFacilitiesScreen')}
                    style={styles.submitButtonStyle}
                    titleTextStyle={styles.titleTextStyle}
                    title="ONLINE TICKETS"
                  />
                </View>
              )
            }

          })}
 {renderSlideBanner()}
 <TextWrapper style={styles.des}
                    numberOfLines={20}
                  >Early, mid and late maturing blueberries are planted in 
                  separate areas, July to September is the busiest period 
                  of the year, when the bush is thriving, an  explosion of l
                  arge blueberries bends the branches of the bushes, 
                  and demand for fresh berries is high.
                  </TextWrapper>
                  <SubmitButton
        onPress={handleVisibility}
        

                    // onPress={() => props.navigation.navigate('ViewFacilitiesScreen')}
                    style={styles.submitButtonStyle}
                    titleTextStyle={styles.titleTextStyle}
                    title="ONLINE TICKETS"
                  />
      </View>
      </ScrollWrapper>
      <BookTickets visibility={visibility}
      onHide={handleVisibility} 
      onPress={handleVisibility}/>

    </MainContainer>
  );
};
export default FarmTourScreen;
