var droll = require("droll");
var format = require("util").format;

const helps = require('./help');

var TennuDiceRoller = {
    init: function(client, imports) {

        function roll(IRCMessage){
            
            var rollCommand = IRCMessage.args.join(' ');
            
            var rollResult = droll.roll(rollCommand);
            
            if(!rollResult){
                return {
                    intent: 'notice',
                    query: true,
                    message: "Unable to parse dice roll formula."
                };
            }
            
            return format("Rolling %s | Results: %s, (%s)", rollCommand, rollResult.rolls.join(", "), rollResult.total);
        }

        return {
            handlers: {
                "!droll !dr": roll,
            },
            commands: ["droll"],
            help: helps
        };

    }
};

module.exports = TennuDiceRoller;