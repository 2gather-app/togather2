// import { Redirect, Stack } from "expo-router";

import React from 'react'
import { View } from 'react-native'
import { Redirect } from 'expo-router'

export default function MainIndex() {
	// return <Redirect href="/(tabs)/Home" />;
	return <Redirect href="/Event" />
	// return <View style={{ backgroundColor: "red", flex: 1 }}></View>;
}
