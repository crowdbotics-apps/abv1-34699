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
      <View style={styles.View_79_331}>
        <Text style={styles.Text_79_331}>Let’s get started.</Text>
      </View>
      <View style={styles.View_79_332}>
        <Text style={styles.Text_79_332}>Already registered? Log in</Text>
      </View>
      <View style={styles.View_79_334}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4363/1754/5a81e8ac191a54245f928bb60e77fbb9"
          }}
          style={styles.ImageBackground_79_335}
        />
      </View>
      <View style={styles.View_76_336}>
        <View style={styles.View_76_337} />
        <View style={styles.View_76_338}>
          <Text style={styles.Text_76_338}>Full Name</Text>
        </View>
      </View>
      <View style={styles.View_76_339}>
        <View style={styles.View_76_340} />
        <View style={styles.View_76_341}>
          <Text style={styles.Text_76_341}>Email</Text>
        </View>
      </View>
      <View style={styles.View_76_342}>
        <View style={styles.View_76_343} />
        <View style={styles.View_76_344}>
          <Text style={styles.Text_76_344}>Password</Text>
        </View>
      </View>
      <View style={styles.View_76_345}>
        <View style={styles.View_76_346} />
        <View style={styles.View_76_347}>
          <Text style={styles.Text_76_347}>Confirm Password</Text>
        </View>
      </View>
      <View style={styles.View_101_434}>
        <Text style={styles.Text_101_434}>Patient Info</Text>
      </View>
      <View style={styles.View_101_435}>
        <View style={styles.View_101_436} />
        <View style={styles.View_101_437}>
          <Text style={styles.Text_101_437}>Continue</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_79_331: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_79_331: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 32,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6,
    textTransform: "none"
  },
  View_79_332: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_79_332: {
    color: "rgba(117, 108, 108, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_79_334: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_79_335: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_76_336: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_337: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(192, 192, 192, 1)",
    borderWidth: 1
  },
  View_76_338: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_76_338: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_76_339: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_340: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(192, 192, 192, 1)",
    borderWidth: 1
  },
  View_76_341: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_76_341: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_76_342: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_343: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(192, 192, 192, 1)",
    borderWidth: 1
  },
  View_76_344: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_76_344: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_76_345: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_346: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(192, 192, 192, 1)",
    borderWidth: 1
  },
  View_76_347: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_76_347: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_101_434: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_101_434: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.32,
    textTransform: "none"
  },
  View_101_435: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("88%")
  },
  View_101_436: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 93, 181, 1)"
  },
  View_101_437: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_101_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
