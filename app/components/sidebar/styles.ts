import {ScaledSheet} from 'react-native-size-matters';

import {colors} from 'app/constants';

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    flexDirection: 'column',
  },
  dp: {
    alignSelf: 'center',
    borderRadius: '200@s',
    elevation: 1,
    height: '70@ms',
    width: '70@ms',
  },
  dpImage: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    paddingTop: '10@s',
  },
  profileContainer: {
    padding: '15@s',
    paddingLeft: '30@s',
    backgroundColor: 'white',
  },
  avatharDetials: {
    padding: '12@s',
  },
  avatharName: {
    fontSize: 18,
    fontWeight: '700',
  },
  companyName: {
    fontSize: 14,
    color: colors.PRIMARY_GREY,
  },
  textGrey: {
    fontSize: 14,
    color: colors.PRIMARY_GREY,
  },
  drawerContent: {
    backgroundColor: '#F8F8F8',
    padding: '15@s',
    paddingLeft: '30@s',
  },
  logoutItems: {
    width: '100%',
    height: '30@s',
    justifyContent: 'center',
  },
  logoutItemsText: {
    fontSize: 15,
    color: colors.PRIMARY_GREY,
    fontWeight: '600',
  },
  logoutContainer: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    alignSelf: 'flex-end',
    padding: '15@s',
    paddingLeft: '30@s',
  },
});

export default Styles;
