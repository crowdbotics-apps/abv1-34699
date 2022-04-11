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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b81/b8bd/94450fc4a192ef390fdffb930aca0410"
        }}
        style={styles.ImageBackground_37_781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_37_802}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c79/890b/807ee2db2efeb4bc7c9b0c366c8a6574"
        }}
        style={styles.ImageBackground_37_803}
      />
      <View style={styles.View_37_924}>
        <View style={styles.View_37_902}>
          <View style={styles.View_37_903} />
          <View style={styles.View_37_904}>
            <View style={styles.View_37_905}>
              <Text style={styles.Text_37_905}>History</Text>
            </View>
            <View style={styles.View_37_906}>
              <Text style={styles.Text_37_906}>Profile</Text>
            </View>
            <View style={styles.View_37_907}>
              <Text style={styles.Text_37_907}>Alerts</Text>
            </View>
            <View style={styles.View_37_908}>
              <Text style={styles.Text_37_908}>Export</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15e/1f0d/0d4357d9eec7d39f6ae91aa133837c1b"
              }}
              style={styles.ImageBackground_37_909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb46/a323/97d4c2b93403a4ce73b31c8ac6c8158e"
              }}
              style={styles.ImageBackground_37_918}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd08/b297/a432c73a9a01b2597b55e8bc57f9f1e5"
              }}
              style={styles.ImageBackground_37_923}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6788/ed29/dc91ac66d6bc1628c2f4c7d9ad7c0c7e"
          }}
          style={styles.ImageBackground_37_830}
        />
      </View>
      <View style={styles.View_37_804} />
      <View style={styles.View_120_105}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b90/ef4d/6ee86bf44808de9761783f52b202deeb"
          }}
          style={styles.ImageBackground_120_106}
        />
        <View style={styles.View_120_107}>
          <Text style={styles.Text_120_107}>On Board 1.27u</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
          }}
          style={styles.ImageBackground_120_108}
        />
        <View style={styles.View_120_109}>
          <Text style={styles.Text_120_109}>22hrs</Text>
        </View>
      </View>
      <View style={styles.View_120_221}>
        <View style={styles.View_120_222}>
          <Text style={styles.Text_120_222}>Sleep</Text>
        </View>
        <View style={styles.View_120_223}>
          <Text style={styles.Text_120_223}>Exercise</Text>
        </View>
        <View style={styles.View_120_224}>
          <Text style={styles.Text_120_224}>Carbohydrate Intake</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_227}
        />
      </View>
      <View style={styles.View_120_238}>
        <View style={styles.View_120_239}>
          <View style={styles.View_120_240}>
            <View style={styles.View_120_241}>
              <Text style={styles.Text_120_241}>6hrs</Text>
            </View>
            <View style={styles.View_120_242}>
              <Text style={styles.Text_120_242}>7:48pm 1.64u</Text>
            </View>
            <View style={styles.View_120_243}>
              <Text style={styles.Text_120_243}>1u/hr</Text>
            </View>
          </View>
          <View style={styles.View_120_244}>
            <Text style={styles.Text_120_244}>In Range</Text>
          </View>
        </View>
        <View style={styles.View_120_245}>
          <Text style={styles.Text_120_245}>Last Bolus</Text>
        </View>
        <View style={styles.View_120_246}>
          <Text style={styles.Text_120_246}>Basal Rate</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f49c/166d/0e7e9f513ad0e7f942d4b0dd81aab459"
        }}
        style={styles.ImageBackground_37_828}
      />
      <View style={styles.View_37_931}>
        <View style={styles.View_37_928}>
          <View style={styles.View_37_929} />
          <View style={styles.View_37_930}>
            <Text style={styles.Text_37_930}>Pause</Text>
          </View>
        </View>
        <View style={styles.View_37_925}>
          <View style={styles.View_37_926} />
          <View style={styles.View_37_927}>
            <Text style={styles.Text_37_927}>Deliver</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_120_249}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b90/ef4d/6ee86bf44808de9761783f52b202deeb"
          }}
          style={styles.ImageBackground_120_250}
        />
        <View style={styles.View_120_251}>
          <Text style={styles.Text_120_251}>On Board 1.27u</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
          }}
          style={styles.ImageBackground_120_252}
        />
        <View style={styles.View_120_253}>
          <Text style={styles.Text_120_253}>22hrs</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_120_254}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab5/45d0/90b7a312896f14edc7a40a53069eaafa"
        }}
        style={styles.ImageBackground_120_270}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_37_781: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%")
  },
  ImageBackground_37_802: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_37_803: {
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
  View_37_924: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%")
  },
  View_37_902: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_37_903: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  View_37_904: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_37_905: {
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
  Text_37_905: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_906: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_37_906: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_907: {
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
  Text_37_907: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_908: {
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
  Text_37_908: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_37_909: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_37_918: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_37_923: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_37_830: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_37_804: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%")
  },
  View_120_105: {
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
  ImageBackground_120_106: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_107: {
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
  Text_120_107: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_120_108: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_109: {
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
  Text_120_109: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_120_221: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("82%")
  },
  View_120_222: {
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
  Text_120_222: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_223: {
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
  Text_120_223: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_224: {
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
  Text_120_224: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_225: {
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
  ImageBackground_120_226: {
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
  ImageBackground_120_227: {
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
  View_120_238: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%")
  },
  View_120_239: {
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
  View_120_240: {
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
  View_120_241: {
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
  Text_120_241: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_242: {
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
  Text_120_242: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_243: {
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
  Text_120_243: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_244: {
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
  Text_120_244: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_245: {
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
  Text_120_245: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_246: {
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
  Text_120_246: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_37_828: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    resizeMode: "cover"
  },
  View_37_931: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("57%")
  },
  View_37_928: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_37_929: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_37_930: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_37_930: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_37_925: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_37_926: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_37_927: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_37_927: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_120_249: {
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
  ImageBackground_120_250: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_251: {
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
  Text_120_251: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_120_252: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_253: {
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
  Text_120_253: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_120_254: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_120_270: {
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
