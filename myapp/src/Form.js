import React,{Component} from "react";
import './index.css';
class Form extends Component{
    constructor(){
        super();
        this.state={UserName:"",
                    Password:"",
                    ConfirmPassword:"",
                    Gmail:""};
        this.OnChange=this.HandleChange.bind(this);
        this.OnSubmit=this.onSubmit.bind(this);   
    }
    HandleChange(event){
        const name= event.target.name;
        const value= event.target.value;
        this.setState({
            [name]:value
        });
        console.log(event.target.name);
    }
    onSubmit(event){
            console.log(this.state);
    }
    render() {
        return(
            <div className="form">
            <h1>Register Now</h1>
            <form> 
                <table>
                    <tbody>
                        <tr><td><input id="UserName"  value={this.state.no} onChange={this.OnChange} placeholder="Username" /></td></tr><br /> 
                        <tr><td><input type="password" id="Password"  value={this.state.street} onChange={this.OnChange} placeholder="*********" /></td></tr><br />
                        <tr><td><input type="password" id="ConfirmPassword" name="ConfirmPassword" value={this.state.commnue} onChange={this.OnChange} placeholder="*********" /></td></tr><br />
                        <tr><td><input id="Gmail" value={this.state.commnue} onChange={this.OnChange} placeholder="Example@gmail.com" /></td></tr><br />
                        <input type="submit" onClick={this.onSubmit} value="Save" /> 
                    </tbody>    
                </table>
             </form>
          </div>
        );
    }
}
export default Form;