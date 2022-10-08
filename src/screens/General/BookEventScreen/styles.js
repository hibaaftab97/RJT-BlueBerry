import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  text:{
    fontFamily: Fonts.MSB,
    fontSize: 1.7 * vh,
    color: theme.textColor,
    marginLeft: 5 * vw,
  },
  des:{
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
    paddingHorizontal:4*vw,
    fontFamily: Fonts.SFR,
    marginTop: 1 * vh
  },
  detailsTextStyle: {
    fontSize: 1.8 * vh,
  },
  detailsTabView: {
    // width: 28 * vw,
    paddingHorizontal:5*vw,
    height: 5 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.defaultAuthDescriptionColor,
    borderRadius: 1 * vw,
  },
  detailsBox: {
    width: 28 * vw,
    paddingHorizontal:5*vw,
    height: 5 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0.2*vh,
    borderColor: '#D2D2D2',
    borderRadius: 0.5 * vh,
    marginTop:3*vh,
  },
  detailsText: {
    fontSize: 1.8 * vh,
    color:'black'
  },
  submitButtonStyle: {
    width: 35 * vw,
    height:5*vh,
    backgroundColor:theme.defaultBackgroundColor,
    marginTop: 4 * vh,
  },
  title: {
    fontSize: 2 * vh,
    fontFamily:Fonts.MR,
    color:'black'
  },
  mainTabsView: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // // width: 60 * vw,
    // alignSelf: 'center',
    // justifyContent: 'space-around',
    marginTop: 5 * vh,
  },
  box:{
paddingVertical:10*vh,
borderColor:'#6D6579',
borderWidth:2*vh
  },
  searchView: {
    width: 100 * vw,
    height: 50 * vh,
    resizeMode: 'cover',
    backgroundColor:'black'
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MB,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
    marginLeft: 5 * vw,
  },

  listView: {
    backgroundColor: theme.whiteBackground,
    height: 100 * vh,
    bottom: 30 * vh,
    borderTopRightRadius: 15 * vw,

  },

  searchRowContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    width: 90 * vw,
    height: 25 * vh,
    marginLeft: 5 * vw,
  },

  listEmptyComponentView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  leftArrowIconButton: {
    justifyContent: 'center',
  },
});
export default styles;
