var plugin = require("../plugin").init();
var should = require("should");

const commandPrefix = "!droll !dr";

var getCommandObj = function(command) {
    return {
        args: command.split(' ')
    };
}

describe('tennu-dice-roller', function() {

    it('Should roll a basic dice 3d6+1', function() {
        var command = getCommandObj("3d6+1");
        var response = plugin.handlers[commandPrefix](command);
        response.should.match(/(Rolling)/);
        response.should.match(/(Results:)/);
    });

    it('Should fail gracefully on invalid input', function() {
        var command = getCommandObj("3e6*1");
        var response = plugin.handlers[commandPrefix](command);
        response.message.should.equal("Unable to parse dice roll formula.");
    });

});