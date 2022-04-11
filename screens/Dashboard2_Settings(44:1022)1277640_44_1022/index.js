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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c79/890b/807ee2db2efeb4bc7c9b0c366c8a6574"
        }}
        style={styles.ImageBackground_44_1024}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b81/b8bd/94450fc4a192ef390fdffb930aca0410"
        }}
        style={styles.ImageBackground_44_1025}
      />
      <View style={styles.View_44_1026} />
      <View style={styles.View_44_1027}>
        <View style={styles.View_44_1028}>
          <Text style={styles.Text_44_1028}>History</Text>
        </View>
        <View style={styles.View_44_1029}>
          <Text style={styles.Text_44_1029}>Profile</Text>
        </View>
        <View style={styles.View_44_1030}>
          <Text style={styles.Text_44_1030}>Settings</Text>
        </View>
        <View style={styles.View_44_1031}>
          <Text style={styles.Text_44_1031}>Export</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15e/1f0d/0d4357d9eec7d39f6ae91aa133837c1b"
          }}
          style={styles.ImageBackground_44_1032}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb46/a323/97d4c2b93403a4ce73b31c8ac6c8158e"
          }}
          style={styles.ImageBackground_44_1041}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4323/9b88/41c66ea86a57214bc7a310d6bd789047"
          }}
          style={styles.ImageBackground_44_1044}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd08/b297/a432c73a9a01b2597b55e8bc57f9f1e5"
          }}
          style={styles.ImageBackground_44_1046}
        />
      </View>
      <View style={styles.View_44_1047} />
      <View style={styles.View_44_1048} />
      <View style={styles.View_44_1052}>
        <View style={styles.View_44_1053}>
          <View style={styles.View_44_1054}>
            <View style={styles.View_44_1055}>
              <Text style={styles.Text_44_1055}>6hrs</Text>
            </View>
            <View style={styles.View_44_1056}>
              <Text style={styles.Text_44_1056}>7:48pm 1.64u</Text>
            </View>
            <View style={styles.View_44_1057}>
              <Text style={styles.Text_44_1057}>1u/hr</Text>
            </View>
          </View>
          <View style={styles.View_44_1058}>
            <Text style={styles.Text_44_1058}>In Range</Text>
          </View>
        </View>
        <View style={styles.View_44_1059}>
          <Text style={styles.Text_44_1059}>Last Bolus</Text>
        </View>
        <View style={styles.View_44_1060}>
          <Text style={styles.Text_44_1060}>Basal Rate</Text>
        </View>
        <View style={styles.View_44_1061}>
          <Text style={styles.Text_44_1061}>today</Text>
        </View>
      </View>
      <View style={styles.View_120_115}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b90/ef4d/6ee86bf44808de9761783f52b202deeb"
          }}
          style={styles.ImageBackground_44_1062}
        />
        <View style={styles.View_44_1063}>
          <Text style={styles.Text_44_1063}>On Board 1.27u</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
          }}
          style={styles.ImageBackground_44_1065}
        />
        <View style={styles.View_44_1066}>
          <Text style={styles.Text_44_1066}>22hrs</Text>
        </View>
      </View>
      <View style={styles.View_44_1067}>
        <View style={styles.View_44_1068}>
          <View style={styles.View_44_1069} />
          <View style={styles.View_44_1070}>
            <Text style={styles.Text_44_1070}>Deliver</Text>
          </View>
        </View>
        <View style={styles.View_44_1071}>
          <View style={styles.View_44_1072} />
          <View style={styles.View_44_1073}>
            <Text style={styles.Text_44_1073}>Pause</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c49/eb38/39c0b6ff15889cc9a04b644f9e452647"
        }}
        style={styles.ImageBackground_44_1196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4233/cd97/a1f4fd0f7f245c8f61bc016c9d834622"
        }}
        style={styles.ImageBackground_44_1197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_44_1023}
      />
      <View style={styles.View_120_259}>
        <View style={styles.View_120_260}>
          <Text style={styles.Text_120_260}>Sleep</Text>
        </View>
        <View style={styles.View_120_261}>
          <Text style={styles.Text_120_261}>Exercise</Text>
        </View>
        <View style={styles.View_120_262}>
          <Text style={styles.Text_120_262}>Carbohydrate Intake</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_265}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab5/45d0/90b7a312896f14edc7a40a53069eaafa"
        }}
        style={styles.ImageBackground_120_272}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_44_1024: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("109%")
  },
  ImageBackground_44_1025: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%")
  },
  View_44_1026: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  View_44_1027: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("96%")
  },
  View_44_1028: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_44_1028: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1029: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_44_1029: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1030: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_44_1030: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1031: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_44_1031: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_44_1032: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_44_1041: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_44_1044: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_44_1046: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  View_44_1047: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%")
  },
  View_44_1048: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 93, 181, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 68,
    borderBottomRightRadius: 68
  },
  View_44_1052: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("61%")
  },
  View_44_1053: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_1054: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  View_44_1055: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1055: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1056: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1056: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1057: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1057: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1058: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1058: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1059: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1059: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1060: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1060: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1061: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_44_1061: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_115: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("11%")
  },
  ImageBackground_44_1062: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_1063: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_44_1063: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_44_1065: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_1066: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_44_1066: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_44_1067: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("50%")
  },
  View_44_1068: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_1069: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_44_1070: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_44_1070: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_44_1071: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  View_44_1072: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_44_1073: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_44_1073: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_44_1196: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_44_1197: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  ImageBackground_44_1023: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_120_259: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("81%")
  },
  View_120_260: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_120_260: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_261: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_120_261: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_262: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_120_262: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_263: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_120_264: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_120_265: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_120_272: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("5%"),
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
