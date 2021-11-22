import { Dimensions } from "react-native";
import { baseI } from './types';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;
const vw: number = width / 100;
const vh: number = height / 100;

export const base: baseI = {
    screenWidth: width,
    screenHeight: height,
    vw,
    vh,
}
