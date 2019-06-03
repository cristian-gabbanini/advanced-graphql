// resolve the query you made
module.exports = {
  Query: {
    welcome() {
      return {
        message: "Hello world!"
      };
    }
  },
  Mutation: {
    createAnimal(_, args) {
      const { name, species } = args.input;
      return {
        name,
        species
      };
    }
  }
};
