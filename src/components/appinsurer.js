import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/InsurerStyle/main.scss';
import Header from './Insurer/Header';
import Welcome from './Insurer/welcome';
import Dashboard from './Insurer/dashboard-insurer';
import Bidding from './Insurer/Bidding';
// import BiddingList from './Insurer/bidding-list';
import MainLayout from './Insurer/main-layout';
import ClaimList from './Insurer/Claim/claim-list';
import Claim from './Insurer/Claim';
import Logout from './Auth/logout';
import InsurerLogin from './Insurer/insurer-login';

const AppInsurer = () => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <Header />
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/insurerlogin" component={InsurerLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/logout" component={Logout} />
        <MainLayout>
          <Switch>
            {/* <Route path="/biddinglist" component={BiddingList} /> */}
<<<<<<< Updated upstream
            <Route path="/bidding" component={Bidding} />
=======
            <Route path="/bidding/:companyId" component={Bidding} />
            <Route path="/claim" component={ClaimList} />
            <Route path="/claim:claimId" component={Claim} />
>>>>>>> Stashed changes
          </Switch>
        </MainLayout>
      </Switch>
    </div>
  </BrowserRouter>
);
AppInsurer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
});
const Container = connect(mapStateToProps)(AppInsurer);
export default Container;
