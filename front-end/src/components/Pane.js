import React, {Component} from 'react'

export default class Pane extends Component {
	render(){
		return(
			<div style={{paddingLeft:40}}>
				<br />
				<label>Sort by: </label>
				<select defaultValue={this.props.sorting} onChange={e => this.props.onSortingChange(e.target.value)}>
					<option value="--">--</option>
					<option value="votescore">VoteScore</option>
					<option value="timestamp">Timestamp</option>
				</select>
			</div>
		);
	}
}

