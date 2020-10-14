import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Singn in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required/>

                    <FormInput type="passwor" name="password" value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    <div className="buttons">
                        <CustomButton type="submit" >Bitch Please</ CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''} Google Bitches {''}</ CustomButton>
                    </div>

                </form>
            </div>
        )
    }
};

export default SignIn;