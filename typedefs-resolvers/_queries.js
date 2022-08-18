const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
  }
`;

module.exports = typeDefs;