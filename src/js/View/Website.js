import React from 'react';
import LoginPage from '../View/LoginPage';
import TodoApp from '../../TodoApp'
export default class Website extends React.Component{
    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<TodoApp/>);
        }else{
            return (<LoginPage onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}
  