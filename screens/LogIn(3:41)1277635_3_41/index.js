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
      <View style={styles.View_3_42} />
      <View style={styles.View_3_43}>
        <Text style={styles.Text_3_43}>Log in</Text>
      </View>
      <View style={styles.View_3_52}>
        <Text style={styles.Text_3_52}>Welcome back.</Text>
      </View>
      <View style={styles.View_3_53}>
        <Text style={styles.Text_3_53}>Forgot Password? </Text>
      </View>
      <View style={styles.View_3_62}>
        <Text style={styles.Text_3_62}>Don’t have an account? Sign up</Text>
      </View>
      <View style={styles.View_79_489}>
        <View style={styles.View_I79_489_76_340} />
        <View style={styles.View_I79_489_76_341}>
          <Text style={styles.Text_I79_489_76_341}>Email</Text>
        </View>
      </View>
      <View style={styles.View_79_490}>
        <View style={styles.View_I79_490_76_343} />
        <View style={styles.View_I79_490_76_344}>
          <Text style={styles.Text_I79_490_76_344}>Password</Text>
        </View>
      </View>
      <View style={styles.View_101_504}>
        <Text style={styles.Text_101_504}>Already registered? Log in</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_3_42: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("81%"),
    backgroundColor: "rgba(39, 93, 181, 1)"
  },
  View_3_43: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_3_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_52: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_3_52: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 32,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.4,
    textTransform: "none"
  },
  View_3_53: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_3_53: {
    color: "rgba(117, 108, 108, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_62: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("111%"),
    justifyContent: "center"
  },
  Text_3_62: {
    color: "rgba(117, 108, 108, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_79_489: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I79_489_76_340: {
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
  View_I79_489_76_341: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I79_489_76_341: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_79_490: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I79_490_76_343: {
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
  View_I79_490_76_344: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I79_490_76_344: {
    color: "rgba(59, 59, 59, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10867942869663239,
    textTransform: "none"
  },
  View_101_504: {
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
  Text_101_504: {
    color: "rgba(117, 108, 108, 1)",
    fontSize: 11,
    fontWeight: "600",
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
