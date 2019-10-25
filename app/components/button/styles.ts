import {ScaledSheet} from 'react-native-size-matters';

import {colors} from 'app/constants';

const Styles = ScaledSheet.create({
  buttonStyle: {
    width: 350,
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY_GREEN,
    justifyContent: 'space-around',
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    width: '85%',
    paddingTop: '2@vs',
    color: colors.containerBg,
    fontWeight: '300',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
  },
  iconStyle: {
    width: '15%',
    fontSize: 19,
    color: colors.containerBg,
    textAlign: 'right',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
