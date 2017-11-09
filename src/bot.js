const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: ' EmVDJeZeqWc94qMkEDxa.apGNZMzba418M2CeQxD9/G.9MHTyFrUMOW3wJICUbwHIewL/E0zq85Rl9t+CanEIWs=',
	certificate: '83988ba0a1fd9b012216de540eaec990205f7ce48a957243c6f8b43613fcf792',
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
