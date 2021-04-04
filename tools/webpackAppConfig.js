const dependencyPlatforms = {
  '@cdm-logger/server': 'server',
  bunyan: 'server',
  'export-dir': 'server',
  express: 'server',
  'body-parser': 'server',
  envalid: 'server',
  'apollo-server-express': 'server',
  'graphql-subscriptions': 'server',
  'graphql-tools': 'server',
  'graphql-tag': ['server', 'web'],
  'immutability-helper': ['ios', 'android', 'web'],
  'isomorphic-fetch': 'server',
  knex: 'server',
  mysql2: 'server',
  persistgraphql: ['server', 'web'],
  'graphql-nats-subscriptions': 'server',
  'graphql-server-core': 'server',
  helmet: 'server',
  'hemera-joi': 'server',
  'hemera-plugin': 'server',
  'hemera-safe-promises': 'server',
  'hemera-sql-store': 'server',
  'hemera-zipkin': 'server',
  inversify: 'server',
  morgan: 'server',
  nats: 'server',
  'nats-hemera': 'server',
  nconf: 'server',
  'node-pre-gyp': 'server',
  'prop-types': 'web',
  ramda: ['web', 'server'],
  'reflect-metadata': 'server',
  sequelize: 'server',
  'react-native': ['ios', 'android'],
  'react-navigation': ['ios', 'android'],
  'serialize-javascript': 'server',
  'source-map-support': 'server',
  sqlite3: 'server',
  'styled-components': ['server', 'web'],
  'subscriptions-transport-ws': ['ios', 'android', 'web'],
  ws: ['server'],
};

module.exports = { dependencyPlatforms };
