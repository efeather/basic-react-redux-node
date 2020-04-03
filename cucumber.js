const common = "--require-module ts-node/register/transpile-only --format node_modules/cucumber-pretty --require ./src/test/integration//presentation/**/*.ts";

module.exports = {
    gui: `${common} --require ./src/test/integration/gui/**/*.ts --tags "(@gui and (not @ignore))"`
};