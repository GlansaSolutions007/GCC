import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

export default function ServiceList() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <View style={[globalStyles.container]}>
      {/* <Text style={globalStyles.titleBlack}>Services</Text>
      <Text style={globalStyles.text}>List of services will be displayed here</Text> */}

      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>tinyRegular-10:</Text>
        <Text style={globalStyles.tinyRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>smallRegular-12:</Text>
        <Text style={globalStyles.smallRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>regularRegular-16:</Text>
        <Text style={globalStyles.regularRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>mediumRegular-18:</Text>
        <Text style={globalStyles.mediumRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>largeRegular-20:</Text>
        <Text style={globalStyles.largeRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xLargeRegular-24:</Text>
        <Text style={globalStyles.xLargeRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>xxLargeRegular-28:</Text>
        <Text style={globalStyles.xxLargeRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>titleRegular-32:</Text>
        <Text style={globalStyles.titleRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>headingRegular-36:</Text>
        <Text style={globalStyles.headingRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>displayRegular-40:</Text>
        <Text style={globalStyles.displayRegular}>Hyderabad</Text>
      </View>
      <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
        <Text style={[globalStyles.mr2, globalStyles.w40]}>heroRegular-44:</Text>
        <Text style={globalStyles.heroRegular}>Hyderabad</Text>
      </View>
        
    </View>
  );
}
