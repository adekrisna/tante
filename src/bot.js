const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: ' Emr2PyLjKzJZNHsLWkYf.X84wLwnCQjJbsPF0Ghq1dW.5EIN5r5yUmD+xOJCqWYcBTHowxJdFMw4eyQGAqzJbyk=',
	certificate: 'bec825436063545df1391408e1406113ea72972feb646b6ee92fbb65537ae43c',
	authToken: ' EmV7eITWdcym9sNRLbr8.H/2+dXDF6mXvxwjFFKFrsa.jg8mOgG6KubOw/ENcTpvQmUTJWTPisi8Hc+1EF6u40c=',
	certificate: '1f4a255e056ec51a79e8cde9927e39595ac4f4238daf540fc3ad7ad7952cef6e',
}
 let client =  new LineConnect(auth);
 let client =  new LineConnect(auth);
//let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
