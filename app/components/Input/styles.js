import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
