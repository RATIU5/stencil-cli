const async = require('async');
const stencilPushUtils = require('./stencil-push.utils');
const stencilPullUtils = require('./stencil-pull.utils');

function stencilPull(options = {}, callback) {
    async.waterfall(
        [
            async.constant(options),
            stencilPushUtils.readStencilConfigFile,
            stencilPushUtils.getStoreHash,
            stencilPushUtils.getChannels,
            stencilPushUtils.promptUserForChannel,
            stencilPullUtils.getChannelActiveTheme,
            stencilPullUtils.getThemeConfiguration,
            stencilPullUtils.getCurrentVariation,
            stencilPullUtils.mergeThemeConfiguration,
            async () => {
                console.error("after mergeThemeConfiguration");
            },
        ],
        callback,
    );
}

module.exports = stencilPull;
