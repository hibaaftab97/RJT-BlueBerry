import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, icons } from '../../../assets/images';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { vh, vw } from '../../../units';
import HomeSlider from '../../../components/Containers/HomeSlider';
import WishlistContainer from '../../../components/Containers/WishlistContainer';
import { DrawerActions, useFocusEffect } from '@react-navigation/native';
import SubmitButton from '../../../components/Buttons/SubmitButton';

import { useSelector } from 'react-redux';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

import theme from '../../../utils/theme';

import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '../../../components/Containers/MainContainer';

const HomeScreen = props => {
  const cartReducer = useSelector(state => state.cartReducer);




  const carousel = [
    {
      name: "Grade A Blueberries",
      image: generalImages.carousel
    }, 
    {
      name: "Grade A Blueberries",
      image: generalImages.carousel
    },
    {
      name: "Grade A Blueberries",
      image: generalImages.carousel
    },
  ]
  const productsData = [
    {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground,
      price: "20.00"
    }, {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground2,
      price: "20.00"

    },
    {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground3,
      price: "20.00"

    },
  ]
  const categoriesData = [
    {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground,
      price: "20.00"
    }, {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground2,
      price: "20.00"

    },
    {
      name: "Grade A Blueberries",
      image: generalImages.categoryBackground3,
      price: "20.00"

    },
  ]

  useEffect(() => {
    // listProductsFunc();
    // listProductsCategoriesFunc();
    // profileFunc(user);
    // homeDataFunc();
  }, []);

  const handleAddToCart = item => {
    const data = {
      itemId: item?.id,
      itemName: item?.name,
      itemPrice: item?.price,
      itemQuantity: 1,
      itemImage: item?.images[0]?.src,
    };
    addToCartFunc(data);
  };

  const handleListProducts = () => {
    if (listProducts?.length < 3) {
      return listProducts;
    } else {
      const listOfProducts = listProducts?.slice(0, 3);
      return listOfProducts;
    }
  };

  const windowWidth = Dimensions.get('window').width;

  const [activeSlide, setActiveSlide] = useState(1);

  const renderCategoriesRow = () => {
    return (
      <View style={styles.rowForMainCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Product Center
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('CatgoriesStack')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFacilitiesRow = () => {
    return (
      <View style={styles.rowForFacilities}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Our Facilities
          </TextWrapper>
        </View>

        <SubmitButton
          onPress={() => props.navigation.navigate('ViewFacilitiesScreen')}
          style={styles.submitButtonStyle}
          titleTextStyle={styles.titleTextStyle}
          title="VIEW MORE"
        />
      </View>
    );
  };

  const renderCategories = ({ item }) => {
    console.log(item, 'categoriesITEM');
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const handleCategoriesImages = () => {
      if (item?.image == null) {
        return generalImages.placeholderImage;
      } else {
        return { uri: item?.image?.src };
      }
    };
    return (
      <View style={styles.mainProductView}>
        <TouchableOpacity
          style={{
            width: 30 * vw,
          }}
          onPress={() =>
            props.navigation.navigate('ProductDetailsScreen', {
              params: item.id,
            })
          }>
          <Image
            // source={handleProductImage()}
            source={item?.image}
            style={styles.productImageStyle}
          />
        </TouchableOpacity>

        {/* <View style={styles.cartView}> */}
        <View style={styles.cartTextView}>
          <TextWrapper style={styles.cartTextStyle}>{item?.name}</TextWrapper>
          {/* </View> */}

        </View>

      </View>
    );
  };

  const renderListCategories = () => {
    return (
      <View
        style={{
          // height: 20 * vh,
          width: 100 * vw,
          // bottom: 12 * vh,
          marginLeft: 15 * vw,
          marginHorizontal: 8 * vw,
        }}>
        <FlatList
          // data={listProductsCategoriesState}
          data={categoriesData}
          renderItem={renderCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        // keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  const renderRecommendedProducts = () => {
    return (
      <View style={styles.rowForArivalCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Shop Now
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ProductsScreen')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      // <View style={styles.sliderView}>
      //   <HomeSlider
      //     onPress={() => props.navigation.navigate('CatgoriesStack')}
      //     data={item}
      //   />
      // </View>
      <Image source={generalImages.carousel}
        style={styles.car} />
    );
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

        />
        {/* {pagination()} */}
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Image style={styles.drawerIconStyle} source={icons.drawer} />
        </TouchableOpacity>
        <TextWrapper style={styles.welcomeTextStyle}>Welcome to</TextWrapper>

        <View style={styles.headerContainer}>
          <TextWrapper style={styles.clothingStoreTextStyle}>
            R.J.T
          </TextWrapper>

          <View style={styles.buttonsView}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('TypeSearchScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.search} style={styles.searchIconStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('BasketScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.cart} style={styles.cartIconStyle} />
              {cartReducer?.cartItems?.length > 0 ? (
                <View style={styles.cartBubbleView}>
                  <TextWrapper style={styles.cartBubbleIconStyle}>
                    {cartReducer?.cartItems?.length}
                  </TextWrapper>
                </View>
              ) : null}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('FilterScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.filter} style={styles.filterIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderRecommended = ({ item }) => {
    const handleProductImage = () => {
      if (item.images[0] == null) {
        return generalImages.placeholderImage;
      } else {
        return { uri: item.images[0].src };
      }
    };
    return (
      <View style={styles.mainProductView}>
        <TouchableOpacity
          style={{
            width: 30 * vw,
          }}
          onPress={() =>
            props.navigation.navigate('ProductDetailsScreen', {
              params: item.id,
            })
          }>
          <Image
            // source={handleProductImage()}
            source={item?.image}
            style={styles.productImageStyle}
          />
        </TouchableOpacity>

        <View style={styles.cartView}>
          <View style={styles.cartTextView}>
            <TextWrapper style={styles.cartTextStyle}>{item?.name}</TextWrapper>
          </View>
          <TouchableOpacity
            // onPress={() => handleAddToCart(item)}
            style={styles.cartGreenView}>
            <Image
              source={icons.cartGreen}
              style={[
                styles.cartGreenStyle,
                { tintColor: theme.defaultBackgroundColor },
              ]}
            />
          </TouchableOpacity>
        </View>

        <WishlistContainer data={item} />
      </View>
    );
  };

  const renderRecommendedProductsList = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
      <View style={styles.recommendedProductsView}>
        <FlatList
          // data={handleListProducts()}
          data={productsData}

          renderItem={renderRecommended}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  const renderMostPurchasedProducts = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
      <View style={styles.purchasedProductsView}>
        <FlatList
          data={handleListProducts()}
          renderItem={renderRecommended}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderHeader()}
      {renderSlideBanner()}
      {renderRecommendedProducts()}
      {renderRecommendedProductsList()}
      {renderCategoriesRow()}
      {renderListCategories()}
      {renderFacilitiesRow()}
      <TouchableOpacity onPress={() => props.navigation.navigate('FarmTourScreen')}>
        <Image source={generalImages.facility}
          style={{
            height: 25 * vh,
            width: 90 * vw,
            marginBottom: 8 * vh
          }} />
      </TouchableOpacity>
      {/* {renderMostPurchasedProducts()} */}
    </ScrollWrapper>
  );
};
export default HomeScreen;
