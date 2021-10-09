module.exports = {
    app: {
        px: '\"',
        token: 'ODk2MTE2Nzk4ODI5NzY0NjM4.YWCbzQ.E2oRg3MgYQItk48Si8myRm32k6Y',
        playing: 'by Frossy ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', // Fix for EPIPE error
                highWaterMark: 1 << 25 // Fix for Aborted error
            },
        },
    }
};