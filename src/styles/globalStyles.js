// src/styles/globalStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
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
    color: colors.white,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    paddingVertical: 10,
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: colors.textDark,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 12,
    color: colors.white,
    fontFamily: fonts.regular,
  },
});
