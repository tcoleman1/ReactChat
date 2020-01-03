import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles'


const firebase = require('firebase')
class SignUpComponent extends React.Component {

    render() {

        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline>
                </CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        SignUp!
          </Typography>
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor="signup-email-input"> Enter your email addres</InputLabel>
                            <Input autoComplete='email' onChange={(e)=> this.userTyping('email', e)} autoFocus id='signup-email-input'></Input>
                            </FormControl>
                            <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'> Create Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('password', e)} autoFocus id='signup-password-input'></Input>
                            </FormControl>
                            <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'> Confirm Your Password</InputLabel>
                            <Input type='password' onChange={(e) => this.userTyping('passwordConfirmation', e)} autoFocus id='signup-password-confirmation-input'></Input>
                            </FormControl>

                            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}> Submit
                            </Button>

                
                    </form>
                </Paper>
            </main>
        )
    }

userTyping = (type, e) => {
    console.log(type,e)
}
    submitSignup = (e) => {
        console.log('submitting')
    }
}

export default withStyles(styles)(SignUpComponent); //adding all of js styles as a property to sign up component