// src/styles/globalStyles.js
import { StyleSheet } from "react-native";
import { color } from "./theme";
import { fonts } from "./fonts";

export default StyleSheet.create({
  // Bootstrap styles ----------- start
  flexrow: {
    flexDirection: "row",
  },
  justifysb: {
    justifyContent: "space-between",
  },
  justifysa: {
    justifyContent: "space-around",
  },
  justifystart: {
    justifyContent: "flex-start",
  },
  justifyend: {
    justifyContent: "flex-end",
  },
  justifycenter: {
    justifyContent: "center",
  },

  justifysa: {
    justifyContent: "space-around",
  },

  justifyevenly: {
    justifyContent: "space-evenly",
  },

  alineItemscenter: {
    alignItems: "center",
  },
  alineItemsEnd: {
    alignItems: "flex-end",
  },
  alineSelfcenter: {
    alignSelf: "center",
  },
  alineSelfend: {
    alignSelf: "flex-end",
  },
  textac: {
    textAlign: "center",
  },
  w40: {
    width: "40%",
  },

  // Bootstrap styles .............. end

  // Default styles ----------- start

  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  // Default styles .............. end

  

  // Color styles ----------- start
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
  // Color styles .............. end

  // background color ----------- start
  bgprimary: {
    backgroundColor: color.primary,
  },
  // background color .............. end

  // margins and paddings ----------- start
  // Margins
  m0: { margin: 0 },
  m1: { margin: 4 },
  m2: { margin: 8 },
  m3: { margin: 12 },
  m4: { margin: 16 },
  m5: { margin: 20 },
  // Top margins
  mtn50: { marginTop: -50 },
  mtn1: { marginTop: -4 },
  mt0: { marginTop: 0 },
  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 12 },
  mt4: { marginTop: 16 },
  mt5: { marginTop: 20 },
  // Bottom margins
  mbn0: { marginBottom: -4 },
  mb0: { marginBottom: 0 },
  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 12 },
  mb4: { marginBottom: 16 },
  mb5: { marginBottom: 20 },
  mb6: { marginBottom: 24 },
  mb50: { marginBottom: 50 },
  // Left margins
  ml0: { marginLeft: 0 },
  ml1: { marginLeft: 4 },
  ml2: { marginLeft: 8 },
  ml3: { marginLeft: 12 },
  ml4: { marginLeft: 16 },
  ml5: { marginLeft: 20 },
  // Right margins
  mr0: { marginRight: 0 },
  mr1: { marginRight: 4 },
  mr2: { marginRight: 8 },
  mr3: { marginRight: 12 },
  mr4: { marginRight: 16 },
  mr5: { marginRight: 20 },
  // Horizontal margins
  mh0: { marginHorizontal: 0 },
  mh1: { marginHorizontal: 4 },
  mh2: { marginHorizontal: 8 },
  mh3: { marginHorizontal: 12 },
  mh4: { marginHorizontal: 16 },
  mh5: { marginHorizontal: 20 },
  // Vertical margins
  mv0: { marginVertical: 0 },
  mv1: { marginVertical: 4 },
  mv2: { marginVertical: 8 },
  mv3: { marginVertical: 12 },
  mv4: { marginVertical: 16 },
  mv5: { marginVertical: 20 },
  mv6: { marginVertical: 24 },

  // Paddings
  p0: { padding: 0 },
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 12 },
  p4: { padding: 16 },
  p5: { padding: 20 },
  p40: { padding: 40 },
  // Top paddings
  pt0: { paddingTop: 0 },
  pt1: { paddingTop: 4 },
  pt2: { paddingTop: 8 },
  pt3: { paddingTop: 12 },
  pt4: { paddingTop: 16 },
  pt5: { paddingTop: 20 },
  // Bottom paddings
  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: 4 },
  pb2: { paddingBottom: 8 },
  pb3: { paddingBottom: 12 },
  pb4: { paddingBottom: 16 },
  pb5: { paddingBottom: 20 },
  // Left paddings
  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: 4 },
  pl2: { paddingLeft: 8 },
  pl3: { paddingLeft: 12 },
  pl4: { paddingLeft: 16 },
  pl5: { paddingLeft: 20 },
  // Right paddings
  pr0: { paddingRight: 0 },
  pr1: { paddingRight: 4 },
  pr2: { paddingRight: 8 },
  pr3: { paddingRight: 12 },
  pr4: { paddingRight: 16 },
  pr5: { paddingRight: 20 },
  // Horizontal paddings
  ph0: { paddingHorizontal: 0 },
  ph1: { paddingHorizontal: 4 },
  ph2: { paddingHorizontal: 8 },
  ph3: { paddingHorizontal: 12 },
  ph4: { paddingHorizontal: 16 },
  ph5: { paddingHorizontal: 20 },
  // Vertical paddings
  pv0: { paddingVertical: 0 },
  pv1: { paddingVertical: 4 },
  pv2: { paddingVertical: 8 },
  pv3: { paddingVertical: 12 },
  pv4: { paddingVertical: 16 },
  pv5: { paddingVertical: 20 },
  // margins and paddings .............. end

  // inputBox  ----------- start

  //  inputBox .............. end

  // Login button ----------- start

  // Login button .............. end

  // Card ----------start

  // Card ............ end

  // Modal ---------- Start

  // Modal ............ end


  // Font styles ----------- start
  tinyBold: {
    ...fonts.tinyBold,
  },
  smallBold: {
    ...fonts.smallBold,
  },
  regularBold: {
    ...fonts.regularBold,
  },
  mediumBold: {
    ...fonts.mediumBold,
  },
  largeBold: {
    ...fonts.largeBold,
  },
  xLargeBold: {
    ...fonts.xLargeBold,
  },
  xxLargeBold: {
    ...fonts.xxLargeBold,
  },
  titleBold: {
    ...fonts.titleBold,
  },
  headingBold: {
    ...fonts.headingBold,
  },
  displayBold: {
    ...fonts.displayBold,
  },
  heroBold: {
    ...fonts.heroBold,
  },
  // ExtraBold Fonts------------start
  tinyExtraBold: {
    ...fonts.tinyExtraBold,
  },
  smallExtraBold: {
    ...fonts.smallExtraBold,
  },
  regularExtraBold: {
    ...fonts.regularExtraBold,
  },
  mediumExtraBold: {
    ...fonts.mediumExtraBold,
  },
  largeExtraBold: {
    ...fonts.largeExtraBold,
  },
  xLargeExtraBold: {
    ...fonts.xLargeExtraBold,
  },

  xxLargeExtraBold: {
    ...fonts.xxLargeExtraBold,
  },
  titleExtraBold: {
    ...fonts.titleExtraBold,
  },
  headingExtraBold: {
    ...fonts.headingExtraBold,
  },
  displayExtraBold: {
    ...fonts.displayExtraBold,
  },
  heroExtraBold: {
    ...fonts.heroExtraBold,
  },
  // ExtraBold Fonts------------end

  // SemiBold Fonts------------start
  tinySemiBold: {
    ...fonts.tinySemiBold,
  },
  smallSemiBold: {
    ...fonts.smallSemiBold,
  },
  regularSemiBold: {
    ...fonts.regularSemiBold,
  },
  mediumSemiBold: {
    ...fonts.mediumSemiBold,
  },
  largeSemiBold: {
    ...fonts.largeSemiBold,
  },
  xLargeSemiBold: {
    ...fonts.xLargeSemiBold,
  },
  xxLargeSemiBold: {
    ...fonts.xxLargeSemiBold,
  },
  titleSemiBold: {
    ...fonts.titleSemiBold,
  },
  headingSemiBold: {
    ...fonts.headingSemiBold,
  },
  displaySemiBold: {
    ...fonts.displaySemiBold,
  },
  heroSemiBold: {
    ...fonts.heroSemiBold,
  },
  // SemiBold Fonts------------end

  //medium Fonts------------start
  tinyMedium: {
    ...fonts.tinyMedium,
  },
  smallMedium: {
    ...fonts.smallMedium,
  },
  regularMedium: {
    ...fonts.regularMedium,
  },
  mediumMedium: {
    ...fonts.mediumMedium,
  },
  largeMedium: {
    ...fonts.largeMedium,
  },
  xLargeMedium: {
    ...fonts.xLargeMedium,
  },
  xxLargeMedium: {
    ...fonts.xxLargeMedium,
  },
  titleMedium: {
    ...fonts.titleMedium,
  },
  headingMedium: {
    ...fonts.headingMedium,
  },
  displayMedium: {
    ...fonts.displayMedium,
  },
  heroMedium: {
    ...fonts.heroMedium,
  },
  // medium Fonts------------end

  // Light Fonts------------start
  tinyLight: {
    ...fonts.tinyLight,
  },
  smallLight: {
    ...fonts.smallLight,
  },
  regularLight: {
    ...fonts.regularLight,
  },
  mediumLight: {
    ...fonts.mediumLight,
  },
  largeLight: {
    ...fonts.largeLight,
  },
  xLargeLight: {
    ...fonts.xLargeLight,
  },
  xxLargeLight: {
    ...fonts.xxLargeLight,
  },
  titleLight: {
    ...fonts.titleLight,
  },
  headingLight: {
    ...fonts.headingLight,
  },
  displayLight: {
    ...fonts.displayLight,
  },
  heroLight: {
    ...fonts.heroLight,
  },
  // Light Fonts------------end

  // Regular Fonts------------start

  tinyRegular: {
    ...fonts.tinyRegular,
  },
  smallRegular: {
    ...fonts.smallRegular,
  },
  regularRegular: {
    ...fonts.regularRegular,
  },
  mediumRegular: {
    ...fonts.mediumRegular,
  },
  largeRegular: {
    ...fonts.largeRegular,
  },
  xLargeRegular: {
    ...fonts.xLargeRegular,
  },
  xxLargeRegular: {
    ...fonts.xxLargeRegular,
  },
  titleRegular: {
    ...fonts.titleRegular,
  },
  headingRegular: {
    ...fonts.headingRegular,
  },
  displayRegular: {
    ...fonts.displayRegular,
  },
  heroRegular: {
    ...fonts.heroRegular,
  },

  // Font styles .............. end
});
