import {ScaledSheet} from 'react-native-size-matters';

import {colors} from 'app/constants';

const Styles = ScaledSheet.create({
  inputStyle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    fontSize: 16,
    marginVertical: 10,
  },
  container: {
    marginTop: 30,
  },
});

export default Styles;
