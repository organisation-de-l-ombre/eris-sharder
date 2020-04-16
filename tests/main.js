'use strict';

const { ErisBaseClient } = require('../src/index');

/**
 * Bot instance
 * @class Main
 * @extends {ErisBaseClient}
 */
module.exports = class Main extends ErisBaseClient {
    /**
     * @constructor
     * @param {Object} bot The Eris client
     */
    constructor (bot) {
        super(bot);
    }

    async launch() {
        process.send({
            name: 'info',
            msg: `${this.bot.user.username}#${this.bot.user.discriminator} successfully logged to Discord.`
        });

        this.bot.shards.forEach(shard => {
            shard.editStatus('online', {
                name: `${this.bot.user.username} | Shard ${shard.id}`
            });
        });
    }
};
