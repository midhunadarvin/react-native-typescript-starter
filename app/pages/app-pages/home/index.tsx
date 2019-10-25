import {connect} from 'react-redux';

import * as HomeActions from 'app/actions/homeActions';
import Home from './home';

const mapStateToProps = ({userinfo}: any) => ({
  imageData: userinfo.data,
  loading: userinfo.loading,
});

const bindToAction = (dispatch: any) => {
  return {
    fetchImageData: () => dispatch(HomeActions.onUserDataInit()),
  };
};

export default connect(
  mapStateToProps,
  bindToAction,
)(Home);
