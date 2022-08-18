/**
 * 데이터 모델
 */

const { gql } = require("apollo-server");
const pool = require("../config");

const typeDefs = gql`
  type Post {
    id: Int!
    userid: String!
    title: String!
    content: String!
    date: String!
  }
`;
const resolvers = {
  Query: {
    posts: async (parent, args) => {
      const sql = `select * from posts`;
      let connection = null;
      try {
        connection = await pool.getConnection(async (conn) => conn);
        const [posts] = await connection.query(sql);
        return posts;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  },
  // Mutation: {
  //   deleteSupply: (parent, args) => dbWorks.deleteItem("supplies", args),
  // },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};