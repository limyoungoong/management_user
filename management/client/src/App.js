import React, {Component} from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  },
  progress : {
    marginLeft: theme.spacing(2)
  }
})




class App extends Component {

  // State는 변경 될 수 있는 대상에 대한 변수 정의할 때 사용
  // Props는 변경되지 않는   정보에 대한 변수 정의할 때 사용

  constructor(props) {
    super(props);
    this.state = {
      customers : '',
      completed : 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers : '',
      completed : 0
    });
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  // [componentDidMount]는 모든 Component가 준비가 된 이후에 실행됨
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }


  render(){
 
    const {classes} = this.props;
    return(
      <div>
        <Paper className={classes.root}>
          <Table  className={classes.table}>
            <TableHead>
              <TableRow>
                  <TableCell>순번</TableCell>
                  <TableCell>사진</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                  <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {this.state.customers ? this.state.customers.map(c =>{
                      return(
                        <Customer 
                          stateRefresh = {this.stateRefresh}
                          key ={c.id}
                          id = {c.id}
                          image = {c.image}
                          name ={c.name}
                          birthday = {c.birthday}
                          gender = {c.gender}
                          job = {c.job}
                        />
                      )
                  }) : 
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                        <CircularProgress className={classes.progress} variant = "determinate" value = {this.state.completed} />
                    </TableCell>
                  </TableRow>
                }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh = {this.stateRefresh} /> 
      </div>
      

    )
  }
}




export default withStyles(styles)(App);
