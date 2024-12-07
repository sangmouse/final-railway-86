import { useEffect, useState } from "react";
import classes from "../styles/user-form.module.scss";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [msg, setMsg] = useState('')
  const username = window.localStorage.getItem('username')
  const password = window.localStorage.getItem('password')

  const onSubmit = event => {
    event.preventDefault()
    
    if(!user.username || !user.password){
      setMsg('Username/password are required!')
    }else{
      if(user.username === 'tuananh123' && user.password === '1234'){
        window.localStorage.setItem('username', user.username)
        window.localStorage.setItem('password', user.password)
        navigate('/')
      }else{
        setMsg('Username/password incorrect!')
      }
    }
  }

  useEffect(() => {
    if(username && password){
      navigate('/')
    }
  })

  return (
    <div className={`${classes.form__bg} min-h-full`}>
      <div className={classes.form__container}>
        <form action="" onSubmit={onSubmit}>
          <h3>Sign In</h3>
          <p className={classes['form__msg-error']}>{msg}</p>
          <div>
            <div>
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={user.username}
                onChange={event => setUser({
                  ...user,
                  username: event.target.value
                }) }
              />
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="password">PassWord</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={event => setUser({
                  ...user,
                  password: event.target.value
                }) }
              />
            </div>
            <br />
            <br />
           
            <div className={classes['form__btn-wrap']}>
              <button className={classes["form__btn-submit"]}>
                <span>Sign In</span>
                <span className={classes.form__icon}></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
