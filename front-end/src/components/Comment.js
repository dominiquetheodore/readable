import React from 'react'
import { Link } from 'react-router-dom'
import dateFormat from '../utils/helper'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

// display a single comment
const style = {
  color: '#8B8C8D'
}
const Comment = ({ comment, handleDelete, handleupVote, handledownVote  }) => (
	<Card containerStyle={{backgroundColor:'#F5F5F5'}}>  
	  <CardHeader
      title={comment.author}
      subtitle={dateFormat(comment.timestamp)}
      avatar=""
    />
	  <CardText>{comment.body}</CardText>
	  <CardActions>
	  	<Link to={'/comments/' + comment.parentId + '/' + comment.id + '/edit'}><FlatButton primary={true} label="Edit" /></Link>
        <FlatButton secondary={true} onClick={handleDelete} label="Delete" />
        <span>{comment.voteScore}</span>
        <FontIcon style={style} onClick={handledownVote} className="material-icons">thumb_down</FontIcon>
        <FontIcon style={{color: '#8B8C8D'}} onClick={handleupVote} className="material-icons">thumb_up</FontIcon>
      </CardActions>
	</Card>
)

export default Comment