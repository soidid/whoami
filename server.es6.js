import express from 'express'
let app = express()
let port = process.env.PORT || 3000;

app.get('*',(req, res)=>{
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.json({
		ipaddress:req.ip.split('::ffff:')[1],
		ip: ip,
		language: req.headers['accept-language'].split(',')[0],
		software: req.headers['user-agent'].split(')')[0].split('(')[1]
	})
	res.end()
})
app.listen(port, (err)=>{
	if(err) {
		console.log('Error!'+err)
		return;
	}


	console.log('Server listening on port '+port);

})