const { Info2 } = require('../models');

const resolvers = {
  Query: {
    allData: async () => {
      return Info2.find();
    }
  },

  Mutation: {
    addData2: async (parent, { contactname, contactemail, contactmessage }) => {
      return Info2.create({ contactname, contactemail, contactmessage });
    }
}
};

module.exports = resolvers;
