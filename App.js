import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const COLORS = {
	red: "#E52020",
	gray: "#CDCDCD"
}

const SLIDER = [
	{ title: "Runaways", img: require("./assets/images/runaways.jpg"), desc: "Season 2"},
	{ title: "Avengers: Infinity War", img: require("./assets/images/avengers.jpg")},
	{ title: "Black Panther", img: require("./assets/images/blackpanther.jpg")}
]

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.bannerWrapper}>
					<ImageBackground imageStyle={styles.bannerImage} style={styles.banner} source={require('./assets/images/banner.png')} resizeMode="cover">
						<LinearGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)"]} style={styles.linearGradient}>
							<Text style={styles.titleAlt}>WATCH BEFORE EVERYONE</Text>
							<Text style={styles.title}>The Punisher:</Text>
							<Text style={styles.title}>Season 2</Text>
						</LinearGradient>
					</ImageBackground>
					<TouchableOpacity style={styles.actionBtn}>
						<Text style={{ color: COLORS.red, fontSize: 30, marginTop: -5, fontWeight: "100" }}>+</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.watchBtn}>
						<Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>watch now --></Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: 30, marginLeft: 80, flex: 1 }}>
					<View style={styles.watchMore}>
						<Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>Watch now</Text>
						<Text style={{ color: COLORS.gray, fontWeight: "bold", }}>view more</Text>
					</View>
					<ScrollView horizontal style={styles.slider} zoomScale={"5"}>
						{
							SLIDER.map((item, i) => {
								return (
									<View style={styles.movieBox}>
										<Image style={styles.movieBoxIMG} source={item.img} />
										<View style={{ justifyContent: "center", height: 90 }}>
											<Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>{item.title}</Text>
											{ !item.desc ? null : 
												<Text style={{ color: COLORS.gray, textAlign: "center" }}>{item.desc}</Text>
											}
										</View>
									</View>
								)
							})
						}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	banner: {
		width: "100%",
		height: 380, // 380,
		// borderBottomLeftRadius: 80,
	},
	bannerWrapper: {
		height: 414, // kapsaması için bu şerefsizi ekledim
		backgroundColor: "transparent",
	},
	bannerImage: {
		borderBottomLeftRadius: 80,
		overflow: 'hidden',
		
	},
	linearGradient: {
        backgroundColor: "transparent",
		position: "absolute",
		zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
		right: 0,
		paddingTop: 180,
		paddingLeft: 95,
		borderBottomLeftRadius: 80,
	},
	title: {
		fontSize: 35,
		color: "white",
		fontWeight: 'bold',
	},
	titleAlt: {
		color: "white",
		fontSize: 12,
		color: "#ccc",
	},
	actionBtn: {
		zIndex: 777,
		position: "absolute",
		top: 380-24,
		left: 80,
		backgroundColor: "white",
		borderRadius: 200,
		height: 48, width: 48,
		justifyContent: "center",
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 2,    
			},
			android: {
				elevation: 10,
			},
		}),
	},
	watchBtn: {
		zIndex: 778,
		position: "absolute",
		top: 380-24,
		left: 150,
		backgroundColor: COLORS.red,
		borderTopLeftRadius: 100,
		borderBottomLeftRadius: 100,
		height: 48, width: "100%",
		paddingHorizontal: 80,
		paddingTop: 12,
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 2,    
			},
			android: {
				elevation: 10,
			},
		}),
	},
	watchMore: {
		flexDirection: 'row',
		alignItems: "flex-end",
		justifyContent: "space-between",
		padding: 20
	},
	slider: {
		flexDirection: "row",
		paddingLeft: 20,
		marginRight: 20,
	},
	movieBox: {
		borderRadius: 20,
		backgroundColor: "white",
		elevation: 2, //ios
		height: 220,
		width: 135,
		marginRight: 20,
	},
	movieBoxIMG: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		height: 130,
		width: "100%"
	}
});
