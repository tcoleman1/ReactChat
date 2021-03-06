import { Link } from 'react-router-dom'
import React from 'react'
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require('firebase')

class LoginComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
            loginError: ""
        }
    }

    render() {

       const { classes } = this.props //taking classes property from this.props and setting it to classes var. 
        return(
            <main className={classes.main}> 
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
            <Typography component='h1' variant='h5'> Log In </Typography>
            
            <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
            <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFour='login-email-input'> Enter your email address</InputLabel>
             <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => this.userTyping('email', e)}></Input> {/*onchange takes the change event and passes it to the this.userTyping function which takes the type of event we're typing on which is the email and event*/}
            </FormControl>

            <FormControl required fullWidth margin='normal'>
            <InputLabel htmlFour='login-password-input'> Enter Password</InputLabel>
             <Input id='login-password-input' type='password' onChange={(e) => this.userTyping('password', e)}></Input> 
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}> LogIn</Button>
            </form>

            {
                this.state.loginError? 
                <Typography component='h5' variant='h6' className={classes.errorText}> Incorrect Login Info </Typography>
            : null
            }

            <Typography component='h5' variant='h6' className={classes.noAccountHeader}> Don't Have An Account ?</Typography>
            <Link className={classes.signUpLink} to="/signup"> Sign Up!</Link>
            </Paper>
            </main>
        )
    }

    userTyping= (type, e) => {
        switch(type){
            case 'email':
                this.setState({ email : e.target.value})
                break;

                case 'password':
                    this.setState({ password : e.target.value })
                    break;

        }
    }
    submitLogin = (e) => {
        e.preventDefault()
        console.log('submiting', this.state)

        firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.history.push('/dashboard')
        }, err => {
            this.setState({ loginError : 'Error'})
            console.log(err)
        });

    }
}

export default withStyles(styles)(LoginComponent)