import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import globalStyles from "../../styles/globalStyles";

export default function ServiceList() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <ScrollView>
      <View style={[globalStyles.container]}>
        {/* <Text style={globalStyles.titleBlack}>Services</Text>
        <Text style={globalStyles.text}>List of services will be displayed here</Text> */}

    
  <View  style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyRegular-10:</Text>
        <Text style={globalStyles.f10Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallRegular-12:</Text>
        <Text style={globalStyles.f12Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>regularRegular-16:</Text>
        <Text style={globalStyles.f16Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumRegular-18:</Text>
        <Text style={globalStyles.f18Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeRegular-20:</Text>
        <Text style={globalStyles.f20Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeRegular-24:</Text>
        <Text style={globalStyles.f24Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeRegular-28:</Text>
        <Text style={globalStyles.f28Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleRegular-32:</Text>
        <Text style={globalStyles.f32Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingRegular-36:</Text>
        <Text style={globalStyles.f36Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayRegular-40:</Text>
        <Text style={globalStyles.f40Regular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroRegular-44:</Text>
        <Text style={globalStyles.f44Regular}>Hyderabad</Text>
      </View>

        <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyExtraBold-10:</Text>
        <Text style={globalStyles.f10ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallExtraBold-12:</Text>
        <Text style={globalStyles.f12ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>ExtraBoldExtraBold-16:</Text>
        <Text style={globalStyles.f16ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumExtraBold-18:</Text>
        <Text style={globalStyles.f18ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeExtraBold-20:</Text>
        <Text style={globalStyles.f20ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeExtraBold-24:</Text>
        <Text style={globalStyles.f24ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeExtraBold-28:</Text>
        <Text style={globalStyles.f28ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleExtraBold-32:</Text>
        <Text style={globalStyles.f32ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingExtraBold-36:</Text>
        <Text style={globalStyles.f36ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayExtraBold-40:</Text>
        <Text style={globalStyles.f40ExtraBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroExtraBold-44:</Text>
        <Text style={globalStyles.f44ExtraBold}>Hyderabad</Text>
      </View>

  <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinySemiBold-10:</Text>
        <Text style={globalStyles.f10SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallSemiBold-12:</Text>
        <Text style={globalStyles.f12SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>SemiBoldSemiBold-16:</Text>
        <Text style={globalStyles.f16SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumSemiBold-18:</Text>
        <Text style={globalStyles.f18SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeSemiBold-20:</Text>
        <Text style={globalStyles.f20SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeSemiBold-24:</Text>
        <Text style={globalStyles.f24SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeSemiBold-28:</Text>
        <Text style={globalStyles.f28SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleSemiBold-32:</Text>
        <Text style={globalStyles.f32SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingSemiBold-36:</Text>
        <Text style={globalStyles.f36SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displaySemiBold-40:</Text>
        <Text style={globalStyles.f40SemiBold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroSemiBold-44:</Text>
        <Text style={globalStyles.f44SemiBold}>Hyderabad</Text>
      </View>


  <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyBold-10:</Text>
        <Text style={globalStyles.f10Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallBold-12:</Text>
        <Text style={globalStyles.f12Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>BoldBold-16:</Text>
        <Text style={globalStyles.f16Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumBold-18:</Text>
        <Text style={globalStyles.f18Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeBold-20:</Text>
        <Text style={globalStyles.f20Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeBold-24:</Text>
        <Text style={globalStyles.f24Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeBold-28:</Text>
        <Text style={globalStyles.f28Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleBold-32:</Text>
        <Text style={globalStyles.f32Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingBold-36:</Text>
        <Text style={globalStyles.f36Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayBold-40:</Text>
        <Text style={globalStyles.f40Bold}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroBold-44:</Text>
        <Text style={globalStyles.f44Bold}>Hyderabad</Text>
      </View>

        <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyMedium-10:</Text>
        <Text style={globalStyles.f10Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallMedium-12:</Text>
        <Text style={globalStyles.f12Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>MediumMedium-16:</Text>
        <Text style={globalStyles.f16Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumMedium-18:</Text>
        <Text style={globalStyles.f18Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeMedium-20:</Text>
        <Text style={globalStyles.f20Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeMedium-24:</Text>
        <Text style={globalStyles.f24Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeMedium-28:</Text>
        <Text style={globalStyles.f28Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleMedium-32:</Text>
        <Text style={globalStyles.f32Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingMedium-36:</Text>
        <Text style={globalStyles.f36Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayMedium-40:</Text>
        <Text style={globalStyles.f40Medium}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroMedium-44:</Text>
        <Text style={globalStyles.f44Medium}>Hyderabad</Text>
      </View>


  <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyLight-10:</Text>
        <Text style={globalStyles.f10Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallLight-12:</Text>
        <Text style={globalStyles.f12Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>LightLight-16:</Text>
        <Text style={globalStyles.f16Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>LightLight-18:</Text>
        <Text style={globalStyles.f18Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeLight-20:</Text>
        <Text style={globalStyles.f20Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeLight-24:</Text>
        <Text style={globalStyles.f24Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeLight-28:</Text>
        <Text style={globalStyles.f28Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleLight-32:</Text>
        <Text style={globalStyles.f32Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingLight-36:</Text>
        <Text style={globalStyles.f36Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayLight-40:</Text>
        <Text style={globalStyles.f40Light}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroLight-44:</Text>
        <Text style={globalStyles.f44Light}>Hyderabad</Text>
      </View>


      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyExtraLight-10:</Text>
        <Text style={globalStyles.f10ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallExtraLight-12:</Text>
        <Text style={globalStyles.f12ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>ExtraLightExtraLight-16:</Text>
        <Text style={globalStyles.f16ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>ExtraLightExtraLight-18:</Text>
        <Text style={globalStyles.f18ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeExtraLight-20:</Text>
        <Text style={globalStyles.f20ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeExtraLight-24:</Text>
        <Text style={globalStyles.f24ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeExtraLight-28:</Text>
        <Text style={globalStyles.f28ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleExtraLight-32:</Text>
        <Text style={globalStyles.f32ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingExtraLight-36:</Text>
        <Text style={globalStyles.f36ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayExtraLight-40:</Text>
        <Text style={globalStyles.f40ExtraLight}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroExtraLight-44:</Text>
        <Text style={globalStyles.f44ExtraLight}>Hyderabad</Text>
      </View>
      </View>
        
    </ScrollView>
  );
}
