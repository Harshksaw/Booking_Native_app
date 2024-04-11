import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions,Platform, PixelRatio } from 'react-native'
import { S } from '@expo/html-elements'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export const scale = SCREEN_WIDTH / 360;
export function pixelNormalize(size) {
    const newSize = size * scale;
    if(Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

