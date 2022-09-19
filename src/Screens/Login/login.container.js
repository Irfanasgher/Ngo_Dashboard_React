import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import authActions from "../../modules/auth/actions";
import Login from "./Login";

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: authActions.signin.request,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
