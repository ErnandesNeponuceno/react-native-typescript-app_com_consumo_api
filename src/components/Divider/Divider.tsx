import { View, StyleSheet } from "react-native";

export default function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    dividerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    divider: {
      alignItems: 'center',
      height: 1,
      width: '85%',
      backgroundColor: '#01A6B3',
      marginVertical: 10,
    },
});