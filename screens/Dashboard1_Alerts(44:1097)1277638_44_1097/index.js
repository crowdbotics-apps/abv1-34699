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
        style={styles.ImageBackground_44_1099}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b81/b8bd/94450fc4a192ef390fdffb930aca0410"
        }}
        style={styles.ImageBackground_44_1100}
      />
      <View style={styles.View_44_1101} />
      <View style={styles.View_44_1102}>
        <View style={styles.View_44_1103}>
          <Text style={styles.Text_44_1103}>History</Text>
        </View>
        <View style={styles.View_44_1104}>
          <Text style={styles.Text_44_1104}>Profile</Text>
        </View>
        <View style={styles.View_44_1105}>
          <Text style={styles.Text_44_1105}>Alerts</Text>
        </View>
        <View style={styles.View_44_1106}>
          <Text style={styles.Text_44_1106}>Export</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15e/1f0d/0d4357d9eec7d39f6ae91aa133837c1b"
          }}
          style={styles.ImageBackground_44_1107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb46/a323/97d4c2b93403a4ce73b31c8ac6c8158e"
          }}
          style={styles.ImageBackground_44_1116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd08/b297/a432c73a9a01b2597b55e8bc57f9f1e5"
          }}
          style={styles.ImageBackground_44_1121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6788/ed29/dc91ac66d6bc1628c2f4c7d9ad7c0c7e"
          }}
          style={styles.ImageBackground_44_1172}
        />
      </View>
      <View style={styles.View_44_1122} />
      <View style={styles.View_44_1123} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d0/425b/ee20d247c3cc45dfc88fd1441fe0d2fd"
        }}
        style={styles.ImageBackground_44_1124}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a80/329c/4559e47aa4ba6e80fb65243300fbf652"
        }}
        style={styles.ImageBackground_44_1125}
      />
      <View style={styles.View_44_1127}>
        <View style={styles.View_44_1128}>
          <View style={styles.View_44_1129}>
            <View style={styles.View_44_1130}>
              <Text style={styles.Text_44_1130}>6hrs</Text>
            </View>
            <View style={styles.View_44_1131}>
              <Text style={styles.Text_44_1131}>7:48pm 1.64u</Text>
            </View>
            <View style={styles.View_44_1132}>
              <Text style={styles.Text_44_1132}>1u/hr</Text>
            </View>
          </View>
          <View style={styles.View_44_1133}>
            <Text style={styles.Text_44_1133}>In Range</Text>
          </View>
        </View>
        <View style={styles.View_44_1134}>
          <Text style={styles.Text_44_1134}>Last Bolus</Text>
        </View>
        <View style={styles.View_44_1135}>
          <Text style={styles.Text_44_1135}>Basal Rate</Text>
        </View>
      </View>
      <View style={styles.View_95_143}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b90/ef4d/6ee86bf44808de9761783f52b202deeb"
          }}
          style={styles.ImageBackground_44_1137}
        />
        <View style={styles.View_44_1138}>
          <Text style={styles.Text_44_1138}>On Board 1.27u</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
          }}
          style={styles.ImageBackground_44_1140}
        />
        <View style={styles.View_44_1141}>
          <Text style={styles.Text_44_1141}>22hrs</Text>
        </View>
      </View>
      <View style={styles.View_44_1142}>
        <View style={styles.View_44_1143}>
          <View style={styles.View_44_1144} />
          <View style={styles.View_44_1145}>
            <Text style={styles.Text_44_1145}>Deliver</Text>
          </View>
        </View>
        <View style={styles.View_44_1146}>
          <View style={styles.View_44_1147} />
          <View style={styles.View_44_1148}>
            <Text style={styles.Text_44_1148}>Pause</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_44_1098}
      />
      <View style={styles.View_120_167}>
        <View style={styles.View_120_169}>
          <Text style={styles.Text_120_169}>Sleep</Text>
        </View>
        <View style={styles.View_120_170}>
          <Text style={styles.Text_120_170}>Exercise</Text>
        </View>
        <View style={styles.View_120_172}>
          <Text style={styles.Text_120_172}>Carbohydrate Intake</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_178}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab5/45d0/90b7a312896f14edc7a40a53069eaafa"
        }}
        style={styles.ImageBackground_120_271}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_44_1099: {
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
  ImageBackground_44_1100: {
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
  View_44_1101: {
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
  View_44_1102: {
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
  View_44_1103: {
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
  Text_44_1103: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1104: {
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
  Text_44_1104: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1105: {
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
  Text_44_1105: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1106: {
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
  Text_44_1106: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_44_1107: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_44_1116: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_44_1121: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_44_1172: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_44_1122: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_44_1123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("44%"),
    minHeight: hp("44%"),
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
  ImageBackground_44_1124: {
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
  ImageBackground_44_1125: {
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
  View_44_1127: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("47%")
  },
  View_44_1128: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_1129: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_44_1130: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_44_1130: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1131: {
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
  Text_44_1131: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1132: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_44_1132: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1133: {
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
  Text_44_1133: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1134: {
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
  Text_44_1134: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_44_1135: {
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
  Text_44_1135: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_95_143: {
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
  ImageBackground_44_1137: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_1138: {
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
  Text_44_1138: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_44_1140: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_1141: {
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
  Text_44_1141: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_44_1142: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("59%")
  },
  View_44_1143: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_1144: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderColor: "rgba(39, 93, 181, 1)",
    borderWidth: 1
  },
  View_44_1145: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_44_1145: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_44_1146: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  View_44_1147: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderColor: "rgba(39, 93, 181, 1)",
    borderWidth: 1
  },
  View_44_1148: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_44_1148: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_44_1098: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_120_167: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("81%")
  },
  View_120_169: {
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
  Text_120_169: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_170: {
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
  Text_120_170: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_172: {
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
  Text_120_172: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_176: {
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
  ImageBackground_120_177: {
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
  ImageBackground_120_178: {
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
  ImageBackground_120_271: {
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
