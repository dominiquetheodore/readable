import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
	render(){
		return(
			<div style={{paddingLeft:40}}>
				<br />
				<h1>Post not found!</h1>
				<br />
				<Link to="/"><RaisedButton secondary={true} label="Go to home page" /></Link>
			</div>
		);
	}
}

