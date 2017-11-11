// convert timestamp to human readable format

function dateFormat(date){
	var d = new Date(date)
	return d.toLocaleString()
}

export default dateFormat