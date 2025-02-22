import React, { Component } from 'react';
import { View, ScrollView, Text} from 'react-native';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// import Editor from './Editor';
import Sidebar from './Sidebar';

import { getData} from '../../actions/userActions';


class User extends Component{

  constructor(props){
    super(props);
  }



  componentDidMount(){
    this.props.getData(this.props.auth.user)
  }
  render(){
    return (
      <View>
      {/* <ScrollView> */}

      {/* <Text>User Component!...</Text> */}
    <Sidebar/>
    {/* {
      this.props.user.showEditor ? <Editor />: null
    } */}
    {/* </ScrollView> */}
    </View>
    )}
}

const mapDispatchToProps = dispatch=>{
  return(bindActionCreators({
    getData
  },dispatch));
}
const mapStateToProps = (state)=>{
  const {user , auth} = state;
  return {user,auth};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);