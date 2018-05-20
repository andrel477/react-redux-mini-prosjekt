import { connect } from 'react-redux';
import EksempelModule from '../view/eksempelModule';

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  description: ownProps.description,
});

const mapDispatchToProps = (state, ownProps) => ({

});

const EksempelContainer = connect(mapStateToProps, mapDispatchToProps)(EksempelModule);

export default EksempelContainer;