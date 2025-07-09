// src/styles/globalStyles.js
import { StyleSheet } from 'react-native';
import fonts from './fonts';
import { color } from './theme';

export default StyleSheet.create({
   primary: {
        color: color.primary
    },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: color.white,
  },
  titleBlack: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: color.black,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: color.white,
    paddingVertical: 10,
    color: color.white,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: color.white,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: color.textDark,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 12,
    color: color.white,
    fontFamily: fonts.regular,
  },
  // Home Screen Styles
    header: {
    backgroundColor: color.primary || '#017F77',
    padding: 20,
  },
  greeting: {
    color: color.white,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    color: color.white,
    fontSize: 14,
    marginRight: 5,
    fontFamily: fonts.regular,
  },
  banner: {
    backgroundColor: color.primary || '#017F77',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  carImage: {
    width: '100%',
    height: 130,
  },
  bannerTitle: {
    fontSize: 22,
    color: color.white,
    fontFamily: fonts.semiBold,
    marginTop: 10,
  },
  bold: {
    fontFamily: fonts.bold,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: color.white,
    fontFamily: fonts.regular,
    marginTop: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.medium,
    marginVertical: 20,
    marginLeft: 20,
    color: color.textDark,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: color.lightGreen || '#E0F7F4',
    borderRadius: 10,
    width: '42%',
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    padding: 10,
    color: color.textDark,
    textAlign: 'center',
  },
  ctaContainer: {
    flexDirection: 'row',
    backgroundColor: color.ctaBackground || '#C4ECE9',
    borderRadius: 10,
    margin: 20,
    padding: 15,
    alignItems: 'center',
  },
  ctaTextContainer: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 24,
    width: '60%',
    fontFamily: fonts.medium,
    color: color.textDark,
    marginBottom: 5,
    lineHeight: 25,
  },
  ctaSubTitle: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: color.textLight || '#555',
  },
  ctaImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  ctaButton: {
    backgroundColor: color.black,
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: color.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  homebg: {
  width: '100%',
  overflow: 'hidden',     
  }
});
