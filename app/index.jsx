import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-primary">
			<Text className="text-3xl font-pextrabold text-white">Fix</Text>
			<StatusBar style="auto" />
			<Link
				href="/home"
				style={{ color: "red" }}
			>
				Go to Profile
			</Link>
		</View>
	);
}
