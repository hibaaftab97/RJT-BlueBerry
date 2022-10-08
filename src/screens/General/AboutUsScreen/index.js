import React, { useEffect } from 'react';
import { View } from 'react-native';

import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';

import SearchHeaderWithBackground from '../../../components/Headers/SearchHeaderWithBackground';
import MainContainer from '../../../components/Containers/MainContainer';

import { useAboutUsHook } from '../../../hooks/useAboutUsHook';

const AboutUsScreen = props => {
  const [aboutUsState, aboutUsFunc] = useAboutUsHook();
  useEffect(() => {
    // aboutUsFunc();
  }, []);

  console.log(aboutUsState, 'aboutUsFunc');
  const renderContent = () => {
    return (
      <View style={styles.contentView}>
        <View style={styles.contentViewStyle}>
          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
          R.J.T. Blueberry Park Inc. was founded in 2007. It is located in the Fraser Valley, 52 km to the east of Vancouver, British Columbia and has an 81.56 acres farm — 40 acres of land for its orchard and manufacturing facility. R.J.T. Blueberry Park Inc. specializes in the planting, picking, and selection of blueberries and the processing and storing of blueberry products.

Blueberries have become very popular in recent years because they are not only delicious, but also contain a high level of anti-oxidants. Since the company’s establishment, its professional team has successfully cultivated 40 acres of blueberry bushes and created a variety of high quality, 
          </TextWrapper>
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <SearchHeaderWithBackground type='drawer' />
      {renderContent()}
    </MainContainer>
  );
};
export default AboutUsScreen;
