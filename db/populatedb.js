const { Client, Pool } = require("pg");

process.loadEnvFile(".env");

const INIT_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS messages (
    msg_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    message TEXT,
    added TIMESTAMP
);
`;

async function main() {
  console.log("Initialising database");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:@${process.env.HOST}:${process.env.PORT}/mini_message_board`,
  });
  await client.connect();
  console.log("Creating table");
  await client.query(INIT_TABLE_QUERY);
  console.log("Table created");
  await client.end();
}

main();
