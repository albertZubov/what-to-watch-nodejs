export const getURI = (
  username: string,
  password: string,
  host: string,
  port: number,
  databaseName: string
) =>
  `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`;
