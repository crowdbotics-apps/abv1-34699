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
        style={styles.ImageBackground_37_777}
      />
      <View style={styles.View_37_866}>
        <View style={styles.View_37_865} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b81/b8bd/94450fc4a192ef390fdffb930aca0410"
          }}
          style={styles.ImageBackground_37_754}
        />
        <View style={styles.View_37_862}>
          <View style={styles.View_37_836} />
          <View style={styles.View_37_861}>
            <View style={styles.View_37_855}>
              <Text style={styles.Text_37_855}>History</Text>
            </View>
            <View style={styles.View_37_856}>
              <Text style={styles.Text_37_856}>Profile</Text>
            </View>
            <View style={styles.View_37_860}>
              <Text style={styles.Text_37_860}>Settings</Text>
            </View>
            <View style={styles.View_37_859}>
              <Text style={styles.Text_37_859}>Export</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15e/1f0d/0d4357d9eec7d39f6ae91aa133837c1b"
              }}
              style={styles.ImageBackground_37_838}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb46/a323/97d4c2b93403a4ce73b31c8ac6c8158e"
              }}
              style={styles.ImageBackground_37_857}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4323/9b88/41c66ea86a57214bc7a310d6bd789047"
              }}
              style={styles.ImageBackground_37_851}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd08/b297/a432c73a9a01b2597b55e8bc57f9f1e5"
              }}
              style={styles.ImageBackground_37_854}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_37_875}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c03c/8b11/248c4a6b13f2ed83671ac12e5d0aa0eb"
          }}
          style={styles.ImageBackground_37_775}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdd/c990/a8213b09aa3c4a632641838074568776"
          }}
          style={styles.ImageBackground_37_863}
        />
        <View style={styles.View_120_110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14dd/f56e/3046906040b6659451142bfc838842e1"
            }}
            style={styles.ImageBackground_120_111}
          />
          <View style={styles.View_120_112}>
            <Text style={styles.Text_120_112}>On Board 1.27u</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c7/9736/96cf915b7fc87218c43af8e3de311865"
            }}
            style={styles.ImageBackground_120_113}
          />
          <View style={styles.View_120_114}>
            <Text style={styles.Text_120_114}>22hrs</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab5/45d0/90b7a312896f14edc7a40a53069eaafa"
          }}
          style={styles.ImageBackground_120_269}
        />
      </View>
      <View style={styles.View_37_932}>
        <View style={styles.View_37_871}>
          <View style={styles.View_37_867} />
          <View style={styles.View_37_869}>
            <Text style={styles.Text_37_869}>Deliver</Text>
          </View>
        </View>
        <View style={styles.View_37_872}>
          <View style={styles.View_37_873} />
          <View style={styles.View_37_874}>
            <Text style={styles.Text_37_874}>Pause</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/7284/7991024717e56bb30d6ba64294af2f1a"
        }}
        style={styles.ImageBackground_37_746}
      />
      <View style={styles.View_120_214}>
        <View style={styles.View_120_215}>
          <Text style={styles.Text_120_215}>Sleep</Text>
        </View>
        <View style={styles.View_120_216}>
          <Text style={styles.Text_120_216}>Exercise</Text>
        </View>
        <View style={styles.View_120_217}>
          <Text style={styles.Text_120_217}>Carbohydrate Intake</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc9/3506/0e4f8dda7a2630d0fad34f35ad619c4a"
          }}
          style={styles.ImageBackground_120_220}
        />
      </View>
      <View style={styles.View_120_229}>
        <View style={styles.View_120_230}>
          <View style={styles.View_120_231}>
            <View style={styles.View_120_232}>
              <Text style={styles.Text_120_232}>6hrs</Text>
            </View>
            <View style={styles.View_120_233}>
              <Text style={styles.Text_120_233}>7:48pm 1.64u</Text>
            </View>
            <View style={styles.View_120_234}>
              <Text style={styles.Text_120_234}>1u/hr</Text>
            </View>
          </View>
          <View style={styles.View_120_235}>
            <Text style={styles.Text_120_235}>In Range</Text>
          </View>
        </View>
        <View style={styles.View_120_236}>
          <Text style={styles.Text_120_236}>Last Bolus</Text>
        </View>
        <View style={styles.View_120_237}>
          <Text style={styles.Text_120_237}>Basal Rate</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_37_777: {
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
  View_37_866: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_37_865: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_37_754: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%")
  },
  View_37_862: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%")
  },
  View_37_836: {
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
  View_37_861: {
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
  View_37_855: {
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
  Text_37_855: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_856: {
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
  Text_37_856: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_860: {
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
  Text_37_860: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_37_859: {
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
  Text_37_859: {
    color: "rgba(123, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_37_838: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_37_857: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_37_851: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_37_854: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  View_37_875: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_37_775: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_37_863: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  View_120_110: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("12%")
  },
  ImageBackground_120_111: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_112: {
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
  Text_120_112: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_120_113: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_120_114: {
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
  Text_120_114: {
    color: "rgba(233, 233, 233, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_120_269: {
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
  },
  View_37_932: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("58%")
  },
  View_37_871: {
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
  View_37_867: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_37_869: {
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
  Text_37_869: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  View_37_872: {
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
  View_37_873: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_37_874: {
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
  Text_37_874: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.5,
    textTransform: "none"
  },
  ImageBackground_37_746: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_120_214: {
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
  View_120_215: {
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
  Text_120_215: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_216: {
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
  Text_120_216: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_217: {
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
  Text_120_217: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_120_218: {
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
  ImageBackground_120_219: {
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
  ImageBackground_120_220: {
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
  View_120_229: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("69%")
  },
  View_120_230: {
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
  View_120_231: {
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
  View_120_232: {
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
  Text_120_232: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_233: {
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
  Text_120_233: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_234: {
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
  Text_120_234: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_235: {
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
  Text_120_235: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_236: {
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
  Text_120_236: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_120_237: {
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
  Text_120_237: {
    color: "rgba(39, 93, 181, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
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
