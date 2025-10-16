import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function MapControls(props: ViewProps) {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.root, { bottom: insets.bottom }]} {...props} />
	);
}

const styles = StyleSheet.create({
	root: {
		position: 'absolute',
		left: 0,
		right: 0,
		borderRadius: 20,
		margin: 16,
		padding: 16,
		backgroundColor: 'white',
		shadowColor: "#090A09",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    gap: 12,
	}
})