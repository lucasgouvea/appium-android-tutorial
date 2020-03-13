module.exports = {
    mochaOpts: {
        ui: 'bdd',
        require: 'ts-node/register',
        compilers: [
            // optional
            'tsconfig-paths/register'
        ]
    },
};