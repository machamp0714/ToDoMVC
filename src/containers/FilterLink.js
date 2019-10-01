import { connect } from "react-redux";
import { setFilter } from "../actions/index";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
