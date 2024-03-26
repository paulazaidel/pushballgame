import React from 'react';
import {View} from 'react-native';
import {styles} from './styles.ts';

type Props = {
  posY: number;
};

export const Ball = ({posY}: Props) => {
  return <View style={[styles.container, {bottom: posY}]}></View>;
};
