import React, { useContext } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Context from '../context.js'
import * as actions from '../action.js'
import './home.scss'

const Home = () => {
    const ctx = useContext(Context);
    const { user } = ctx.state;
    const { updateName, updateEmail } = bindActionCreators(actions, ctx.dispatch);

    const changeName = (e) => {
        console.log(e.target.type);
        updateName(e.target.value);
    }

    const changeEmail = (e) => {
        updateEmail(e.target.value);
    }

    return <div styleName="form">
        <h3 styleName="sub-title">This is home page</h3>
        <div>
            <p>hello, {user.name} !</p>
            <p>your email is {user.email} !</p>
            <p styleName="tip">please change the name and email !!</p>
        </div>
        <div><input type="text" placeholder="name" defaultValue={user.name} onChange={(e) => changeName(e)} /></div>
        <div><input type="email" placeholder="email" defaultValue={user.email} onChange={(e) => changeEmail(e)} /></div>
        <Link styleName="link" to="/list">redirect to list</Link>
    </div>
}

export default Home;