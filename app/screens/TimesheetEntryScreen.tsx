import { FC } from "react"

import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native"
import { Screen } from "@/components"
import { useState } from "react"

import { Picker } from "@react-native-picker/picker"
export const TimesheetEntryScreen: FC = () => {
  const [selectedProject, setSelectedProject] = useState("Project A")
  return (
    <Screen preset="fixed" contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>📅 Add Timesheet</Text>

        <Text style={styles.label}>Employee</Text>
        <Picker
          selectedValue={selectedProject}
          onValueChange={(itemValue) => setSelectedProject(itemValue)}
          style={styles.readOnlyInput}
        >
          <Picker.Item label="Training " value="Training" />
          <Picker.Item label="Edison Tower Power " value="Edison Tower Power" />
          <Picker.Item label="IS 45X " value="IS 45X" />
        </Picker>
        <Text style={styles.label}>Shift</Text>
        <Picker
          selectedValue={selectedProject}
          onValueChange={(itemValue) => setSelectedProject(itemValue)}
          style={styles.readOnlyInput}
        >
          <Picker.Item label="Select Shift " value="Training" />
        </Picker>
        <Text style={styles.label}>Trade Union</Text>
        <Picker
          selectedValue={selectedProject}
          onValueChange={(itemValue) => setSelectedProject(itemValue)}
          style={styles.readOnlyInput}
        >
          <Picker.Item label="Select No Union Trade " value="Training" />
        </Picker>
        <View style={styles.timeRow}>
          <View style={styles.timeInputContainer}>
            <Text style={styles.label}>Hours</Text>
            <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
          </View>
          <View style={styles.timeInputContainer}>
            <Text style={styles.label}>Minutes</Text>
            <TextInput style={styles.input} placeholder="00" keyboardType="numeric" />
          </View>
        </View>
        <TouchableOpacity style={styles.addEntryButton} onPress={() => console.log("Add Entry")}>
          <Text style={styles.addEntryText}>+ Add Entry</Text>
        </TouchableOpacity>

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  addEntryButton: {
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 30,
    paddingVertical: 12,
  },
  addEntryText: {
    fontSize: 16,
    fontWeight: "500",
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
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 12,
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

  timeInputContainer: {
    flex: 1,
    marginRight: 10,
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
})
