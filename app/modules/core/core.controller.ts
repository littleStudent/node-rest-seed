/// <reference path="../../../typings/tsd.d.ts" />

var Slack = require('node-slack');
var slack = new Slack('https://hooks.slack.com/services/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');

export = CoreController
class CoreController {
	constructor() {
	}
	
	static default(req, res) {
		slack.send({
    text: 'Howdy!',
    channel: '#general',
    username: 'Bot'
});
		res.send('respond with a resource');
	}
	
	static test(req, res) {
		console.log('aasdf')
		var reply = slack.respond(req.body,function(hook) {
        	return {
        	    text: 'Good point, ' + hook.user_name,
        	    username: 'Bot'
       	 	};
    	});
   		res.json(reply);
	}
}