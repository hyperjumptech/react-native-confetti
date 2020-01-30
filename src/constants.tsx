import {Dimensions} from 'react-native';

export const BUFFER_CONSTANT = 0.1;
export const SECOND = 1000;
export const CHARACTER_SIZE = 14;

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const HEIGHT_BUFFER = WINDOW_HEIGHT * BUFFER_CONSTANT;
export const WIDTH_BUFFER = WINDOW_WIDTH * BUFFER_CONSTANT;
export const WINDOW_HEIGHT_WITH_BUFFER = WINDOW_HEIGHT + HEIGHT_BUFFER;
export const WINDOW_WIDTH_WITH_BUFFER = WINDOW_WIDTH + WIDTH_BUFFER;
