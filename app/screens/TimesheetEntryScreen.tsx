import { FC } from "react"
import { Text, StyleSheet } from "react-native"
import { Screen } from "@/components"
export const TimesheetEntryScreen: FC = () => {
  return (
    <Screen preset="fixed" contentContainerStyle={styles.container}>
      <Text style={styles.text}> This is the Timesheet Entry Page</Text>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",

    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
