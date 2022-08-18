/**
 * 데이터 모델
 */

const { gql } = require("apollo-server");
const pool = require("../config");

const typeDefs = gql`
  type User {
    userid: String!
    userpassword: String!
    username: String!
  }
`;
const resolvers = {
  Query: {
    users: async (parent, args) => {
      const sql = `select * from users`;
      let connection = null;
      try {
        connection = await pool.getConnection(async (conn) => conn);
        const [users] = await connection.query(sql);
        return users;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  },
  // Mutation: {
  //   deleteEquipment: (parent, args) => dbWorks.deleteItem("equipments", args),
  // },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};