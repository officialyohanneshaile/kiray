import React from 'react';
import {View} from 'react-native';

export default function Separator() {
    return (
      <View
        style={{
          height: 0,
          width: 10,
          backgroundColor: "white",
        }}
      />
    );
  }