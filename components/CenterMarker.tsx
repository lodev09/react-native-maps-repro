import { StyleSheet, View } from "react-native";

export function CenterMarker() {
	return (
		<View style={styles.root} />
	);
}

const styles = StyleSheet.create({
	root: {
		width: 20,
		height: 20,
		backgroundColor: 'blue',
		borderRadius: 10,
		marginTop: 20,
	}
})