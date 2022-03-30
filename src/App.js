import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route, HashRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "./components/common/WithRouter/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path='/profile/*' element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                                </React.Suspense>}/>

                            <Route path="dialogs/*" element={
                                    <React.Suspense fallback={<Preloader/>}>
                                        <DialogsContainer/>
                                    </React.Suspense>}/>

                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>

                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialJsApp = (props) => {
    return (
        // `/${process.env.PUBLIC_URL}`
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SocialJsApp;