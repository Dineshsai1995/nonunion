import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { Text, Screen } from "@/components"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { Picker } from "@react-native-picker/picker"

import { AppStackScreenProps } from "../navigators"
import { $styles } from "@/theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useAppTheme } from "@/utils/useAppTheme"
interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const { theme } = useAppTheme()
  const navigation = useNavigation()

  const handleAddEntry = () => {
    navigation.navigate("TimesheetEntry" as never)
    console.log("Add Entry button pressed")
  }

  const [selectedProject, setSelectedProject] = useState("Project A")
  const [notes, setNotes] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  return (
    <Screen preset="fixed" contentContainerStyle={$styles.flex1}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          tintColor={theme.isDark ? theme.colors.palette.neutral900 : undefined}
        />
        <Text style={styles.header}>📅 Add Timesheet</Text>
        <Text style={styles.label}>Sheet Date</Text>
        <TextInput style={styles.readOnlyInput} value="23 JAN 2023" editable={true} />
        <Text style={styles.label}>Project</Text>
        <Picker
          selectedValue={selectedProject}
          onValueChange={(itemValue) => setSelectedProject(itemValue)}
          style={styles.readOnlyInput}
        >
          <Picker.Item label="Training " value="Training" />
          <Picker.Item label="Edison Tower Power " value="Edison Tower Power" />
          <Picker.Item label="IS 45X " value="IS 45X" />
        </Picker>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          placeholder="Enter notes here"
          value={notes}
          onChangeText={setNotes}
          style={styles.input}
          multiline
          numberOfLines={4}
        />
        <Text style={styles.label}>Start Time</Text>
        <TextInput
          placeholder="7.00 AM"
          value={startTime}
          onChangeText={setStartTime}
          style={styles.input}
        />

        <Text style={styles.label}>End Time</Text>
        <TextInput
          placeholder="3.00 PM"
          value={endTime}
          onChangeText={setEndTime}
          style={styles.input}
        />

        <View style={styles.centeredButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddEntry}>
            <Text style={styles.buttonText}> + Add Entry</Text>
          </TouchableOpacity>

          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  )
})
const styles = StyleSheet.create({
  button: {
    // backgroundColor: theme.colors.background,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 30,
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 280,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },

  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },

  readOnlyInput: {
    borderRadius: 6,
    marginBottom: 20,
    padding: 10,
  },
  resetButton: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  resetButtonText: {
    fontSize: 16,
  },
  submitButton: {
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  submitButtonText: {
    fontSize: 16,
  },
})

// const $topContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
//   flexShrink: 1,
//   flexGrow: 1,
//   flexBasis: "57%",
//   justifyContent: "center",
//   paddingHorizontal: spacing.lg,
// })
// const $title: TextStyle = {
//   fontSize: 18,
//   fontWeight: "bold",
//   marginBottom: 360,
// }

// const $buttonContainer: ViewStyle = {
//   backgroundColor: "#007AFF",
//   paddingVertical: 12,
//   paddingHorizontal: 32,
//   borderRadius: 8,
// }
