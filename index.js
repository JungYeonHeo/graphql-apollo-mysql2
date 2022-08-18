const { ApolloServer } = require("apollo-server");

const queries = require("./typedefs-resolvers/_queries");
// const mutations = require("./typedefs-resolvers/_mutations");
// const enums = require("./typedefs-resolvers/_enums");
const users = require("./typedefs-resolvers/users");
const posts = require("./typedefs-resolvers/posts");

const typeDefs = [
  queries, 
  // mutations, 
  // enums,
  users.typeDefs,
  posts.typeDefs
];

const resolvers = [
  users.resolvers,
  posts.resolvers
];

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});