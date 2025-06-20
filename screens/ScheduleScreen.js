import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

export const ScheduleScreen = ({ schedule }) => {
  return (
    <ScrollView style={{ padding: 16 }}>
      {schedule.map(session => (
        <View key={session.id} style={{ marginBottom: 12, padding: 12, borderWidth: 1 }}>
          <Text>{session.name}</Text>
          <Text>{session.time}</Text>
          <Button title="Book" onPress={() => {}} />
        </View>
      ))}
    </ScrollView>
  );
};