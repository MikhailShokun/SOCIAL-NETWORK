import React from 'react';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profileReducer';
import Profile from './Profile';
import {compose} from "redux";
import {withRouter} from "../common/WithRouter/withRouter";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match
            ? this.props.match.params.userId : this.props.authorisedUserId;
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = this.props.authorisedUserId;
        // }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match && this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        } else if(!this.props.match && this.props.match !== prevProps.match){
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={this.props.authorisedUserId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto, saveProfile}),
    withRouter,
    withAuthNavigate
)(ProfileContainer)