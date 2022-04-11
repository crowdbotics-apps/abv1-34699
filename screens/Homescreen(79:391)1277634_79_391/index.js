import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_79_392}>
        <View style={styles.View_I79_392_3_14} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88d8/be0b/d7865c898db9b45cd51244e873c9bd15"
          }}
          style={styles.ImageBackground_I79_392_17_215}
        />
        <View style={styles.View_I79_392_3_10}>
          <Text style={styles.Text_I79_392_3_10}>Sign up</Text>
        </View>
        <View style={styles.View_I79_392_3_11}>
          <Text style={styles.Text_I79_392_3_11}>Log in</Text>
        </View>
        <View style={styles.View_I79_392_3_13} />
      </View>
      <View style={styles.View_79_421} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd98/167b/478cae5c4515c879bc635682e924efd1"
        }}
        style={styles.ImageBackground_79_420}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_79_392: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I79_392_3_14: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(55, 130, 184, 1)",
    opacity: 0,
    borderColor: "rgba(39, 93, 181, 1)",
    borderWidth: 1
  },
  ImageBackground_I79_392_17_215: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I79_392_3_10: {
    flexGrow: 1,
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I79_392_3_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I79_392_3_11: {
    flexGrow: 1,
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_I79_392_3_11: {
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I79_392_3_13: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  View_79_421: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_79_420: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
