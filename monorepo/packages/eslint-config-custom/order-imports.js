const appPrefix = '@monorepo';

const commonOrderImports = [`/^${appPrefix}/utils/`];

const nextOrderImports = [`/^${appPrefix}/ui/`];

module.exports = [...commonOrderImports, ...nextOrderImports];
