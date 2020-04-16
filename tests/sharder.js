'use strict';

const { ClusterManager } = require('../src/index');

new ClusterManager('NjkyNDcyMTE2ODQyNTk0NDA0.XpbTnQ.z2T26jZOqJVilgBcMDcUiJZ3eG0', "/main.js", {
    name: 'Testing bot',
    clusters: 8,
    shards: 40,
    webhooks: {
        cluster: {
            id: '662613404397207554',
            token: 'bmuAAAbUD2DQqAwFG3YhmfbPApjODMmcJ6gRIZQjd430xZi1Toz_h7K4J3LiQqj3oD-W'
        },
        shard: {
            id: '662613404397207554',
            token: 'bmuAAAbUD2DQqAwFG3YhmfbPApjODMmcJ6gRIZQjd430xZi1Toz_h7K4J3LiQqj3oD-W'
        }
    }
});
