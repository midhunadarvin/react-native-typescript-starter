import {ScaledSheet} from 'react-native-size-matters';

import {colors, fonts} from 'app/constants';

const themes = ScaledSheet.create({
  container: {
    backgroundColor: colors.containerBg,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: fonts.FONTSIZE_HEADING,
    padding: '10@ms',
    justifyContent: 'space-between',
  },
});

export default themes;
