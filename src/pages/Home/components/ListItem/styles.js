import { StyleSheet } from 'react-native';
import { THEME } from '../../../../constants';

const {
  COLOR, FONT, OFFSET, UNIT,
} = THEME;
const IMAGE_SIZE = UNIT * 3.2;
const BULLET_SIZE = UNIT;

export default StyleSheet.create({
  active: {
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
  },
  alert: {
    position: 'absolute',
    bottom: -UNIT / 4,
    right: -UNIT / 2,
    tintColor: THEME.WHITE,
    width: FONT.SIZE.LARGE,
    height: FONT.SIZE.LARGE,
  },
  bullet: {
    borderRadius: BULLET_SIZE / 2,
    height: BULLET_SIZE,
    position: 'absolute',
    width: BULLET_SIZE,
    zIndex: 1,
  },
  centered: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: UNIT / 2,
    paddingHorizontal: OFFSET,
    backgroundColor: 'transparent',
  },
  hint: {
    opacity: 0.75,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
  imageWrap: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
    borderRadius: (IMAGE_SIZE * 1.2) / 2,
    height: IMAGE_SIZE * 1.2,
    justifyContent: 'center',
    width: IMAGE_SIZE * 1.2,
  },
  info: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  green: {
    backgroundColor: COLOR.GREEN,
  },
  operation: {
    opacity: 0.75,
    transform: [{ scale: 0.75 }],
  },
  option: {
    alignSelf: 'center',
    tintColor: THEME.WHITE,
    marginTop: UNIT * 1.32,
  },
  price: {
    flex: 0,
    minWidth: '30%',
    maxWidth: '50%',
    alignItems: 'flex-end',
  },
  red: {
    backgroundColor: COLOR.RED,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: THEME.CONTRAST,
    fontSize: FONT.SIZE.SMALL,
  },
  thumb: {
    marginVertical: UNIT / 2,
    marginRight: UNIT,
  },
  value: {
    color: THEME.WHITE,
    fontSize: FONT.SIZE.LARGE,
  },
});
