/**
 * 가능한 데이터 check
 */
const { gql } = require("apollo-server");
const typeDefs = gql`
  enum Role {
    developer
    designer
    planner
  }
  enum NewOrUsed {
    new
    used
  }
`;
module.exports = typeDefs;