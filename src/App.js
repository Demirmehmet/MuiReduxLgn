import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import {Navbar} from './app/Navbar'

import {SinglePostPage} from './features/posts/SinglePostPage'
import {EditPostForm} from './features/posts/EditPostForm'
import SignInSide from './features/login/LoginForm'
import {MainPage} from "./features/posts/MainPage";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/main" component={MainPage}
                    />
                    <Route exact path="/posts/:postId" component={SinglePostPage}/>
                    <Route exact path="/editPost/:postId" component={EditPostForm}/>
                    <Route exact path="/login" component={SignInSide}/>
                    <Redirect to="/login"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
