const _connectDb = async (mongodb, dbConfig) => {
  const { MongoClient } = mongodb;
  console.info(`connecting to: ${dbConfig.connectionString}...`);
  const client = await MongoClient.connect(dbConfig.connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
  if (client) {
    console.info('database connected');
  }
  return {
    db: client.db(dbConfig.dbName),
    client
  };
};

const dbConnector = async (app, mongodb, dbConfig) => {
  app.locals.mongo = await _connectDb(mongodb, dbConfig);
};

module.exports = dbConnector;