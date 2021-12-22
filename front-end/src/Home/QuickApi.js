import React,{Component} from 'react';
import QuickSearch from './QuickSearch';
import './Style.css';

const url ="https://apiforeveryone.herokuapp.com/quicksearch"

class QuickApi extends Component{
    constructor(props){
        super(props);

        this.state={
            QuickData:''
        }
    }
    render(){
        return(
            <div>
                <QuickSearch quickData={this.state.QuickData}/>
            </div>
        )
    }

    //api call here
    componentDidMount(){
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({QuickData:data})
        })
    }

}

export default QuickApi