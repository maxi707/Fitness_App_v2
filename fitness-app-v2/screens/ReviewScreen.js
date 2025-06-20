import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export const ReviewScreen = ({ reviews }) => {
  return (
    <ScrollView style={{ padding: 16 }}>
      {reviews.map((r, idx) => (
        <View key={idx} style={{ marginBottom: 12 }}>
          <Text>{r.user}</Text>
          <Text>{r.text}</Text>
          <Text>⭐ {r.rating}</Text>
        </View>
      ))}
    </ScrollView>
  );
};