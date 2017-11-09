const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: ' Emr2PyLjKzJZNHsLWkYf.X84wLwnCQjJbsPF0Ghq1dW.5EIN5r5yUmD+xOJCqWYcBTHowxJdFMw4eyQGAqzJbyk=',
	certificate: 'bec825436063545df1391408e1406113ea72972feb646b6ee92fbb65537ae43c',
}
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
