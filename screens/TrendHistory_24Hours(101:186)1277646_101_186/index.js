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
        style={styles.ImageBackground_101_187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b81/b8bd/94450fc4a192ef390fdffb930aca0410"
        }}
        style={styles.ImageBackground_101_188}
      />
      <View style={styles.View_101_189} />
      <View style={styles.View_101_190}>
        <View style={styles.View_101_191}>
          <Text style={styles.Text_101_191}>History</Text>
        </View>
        <View style={styles.View_101_192}>
          <Text style={styles.Text_101_192}>Profile</Text>
        </View>
        <View style={styles.View_101_193}>
          <Text style={styles.Text_101_193}>Settings</Text>
        </View>
        <View style={styles.View_101_194}>
          <Text style={styles.Text_101_194}>Export</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15e/1f0d/0d4357d9eec7d39f6ae91aa133837c1b"
          }}
          style={styles.ImageBackground_101_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb46/a323/97d4c2b93403a4ce73b31c8ac6c8158e"
          }}
          style={styles.ImageBackground_101_204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd08/b297/a432c73a9a01b2597b55e8bc57f9f1e5"
          }}
          style={styles.ImageBackground_101_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6788/ed29/dc91ac66d6bc1628c2f4c7d9ad7c0c7e"
          }}
          style={styles.ImageBackground_101_208}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_101_211}
      />
      <View style={styles.View_101_212} />
      <View style={styles.View_101_214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14dd/f56e/3046906040b6659451142bfc838842e1"
          }}
          style={styles.ImageBackground_101_215}
        />
        <View style={styles.View_101_216}>
          <Text style={styles.Text_101_216}>On Board 1.27u</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
          }}
          style={styles.ImageBackground_101_217}
        />
        <View style={styles.View_101_218}>
          <Text style={styles.Text_101_218}>22hrs</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bb0/4b5b/527a26b2ae42c4bc7cbb65322a9b84ad"
        }}
        style={styles.ImageBackground_101_219}
      />
      <View style={styles.View_101_220}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a1/bf3e/720f9fdeb03ebc4038c6bc58c426315b"
          }}
          style={styles.ImageBackground_101_221}
        />
        <View style={styles.View_101_226}>
          <View style={styles.View_101_227}>
            <Text style={styles.Text_101_227}>24 Hours</Text>
          </View>
          <View style={styles.View_101_228}>
            <Text style={styles.Text_101_228}>30 Day</Text>
          </View>
          <View style={styles.View_101_229}>
            <Text style={styles.Text_101_229}>90 Day</Text>
          </View>
          <View style={styles.View_101_230}>
            <Text style={styles.Text_101_230}>7 Day</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3bb/df81/4f67eef2db72631704e10b7f4a4236d4"
        }}
        style={styles.ImageBackground_101_231}
      />
      <View style={styles.View_101_232}>
        <Text style={styles.Text_101_232}>Average</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/b583/fe040f6322ca6776f2f0faf2d6b363b0"
        }}
        style={styles.ImageBackground_101_233}
      />
      <View style={styles.View_120_166}>
        <View style={styles.View_101_234}>
          <Text style={styles.Text_101_234}>Time in Range </Text>
        </View>
        <View style={styles.View_101_235}>
          <Text style={styles.Text_101_235}>Sleep</Text>
        </View>
        <View style={styles.View_101_236}>
          <Text style={styles.Text_101_236}>Exercise</Text>
        </View>
        <View style={styles.View_101_237}>
          <Text style={styles.Text_101_237}>Bolus Delivered</Text>
        </View>
        <View style={styles.View_101_238}>
          <Text style={styles.Text_101_238}>Carbohydrate Intake</Text>
        </View>
        <View style={styles.View_101_239}>
          <Text style={styles.Text_101_239}>Basal Rate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_244}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_101_245}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a25c/b381/0076c3266a0546c3a217db92a43e3802"
        }}
        style={styles.ImageBackground_101_250}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a648/db68/bec3b504ccd5ce19f409e1dd3b044e76"
        }}
        style={styles.ImageBackground_101_497}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_101_187: {
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
  ImageBackground_101_188: {
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
  View_101_189: {
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
  View_101_190: {
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
  View_101_191: {
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
  Text_101_191: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_192: {
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
  Text_101_192: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_193: {
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
  Text_101_193: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_194: {
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
  Text_101_194: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_101_195: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_101_204: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_101_207: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_101_208: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_101_211: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_101_212: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_214: {
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
  ImageBackground_101_215: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_216: {
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
  Text_101_216: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_101_217: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_218: {
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
  Text_101_218: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_101_219: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_101_220: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("60%")
  },
  ImageBackground_101_221: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_226: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_101_227: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_227: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_228: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_228: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_229: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_229: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_101_230: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_230: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_101_231: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("68%")
  },
  View_101_232: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("53%"),
    justifyContent: "center"
  },
  Text_101_232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_233: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("44%"),
    resizeMode: "cover"
  },
  View_120_166: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("73%")
  },
  View_101_234: {
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
  Text_101_234: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_235: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_101_235: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_236: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_101_236: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_237: {
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
  Text_101_237: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_238: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_101_238: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_239: {
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
  Text_101_239: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_240: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_101_241: {
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
  ImageBackground_101_242: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  ImageBackground_101_243: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_101_244: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  ImageBackground_101_245: {
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
  ImageBackground_101_250: {
    width: wp("121%"),
    minWidth: wp("121%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    resizeMode: "cover"
  },
  ImageBackground_101_497: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("106%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
