import { connect } from 'react-redux';
import MainComponent from './component';

export default connect(
  state => ({
    router: state.router
  })
)(MainComponent);