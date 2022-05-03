const { ApolloServer } = require("apollo-server-express");
 
const fs = require("fs");
const path = require("path");
const app = require("express")();
 
const gqlFiles = fs.readdirSync(path.join(__dirname, "./graphql/typedefs"));
 
let typeDefs = "";
 
gqlFiles.forEach((file) => {
 typeDefs += fs.readFileSync(
   path.join(__dirname, "./graphql/typedefs", file),
   {
     encoding: "utf8",
   }
 );
});
 
const resolvers = require("./graphql/resolvers/index");
 
let apolloServer = {
 graphqlPath: "",
};
 
async function startServer() {
 apolloServer = new ApolloServer({ typeDefs, resolvers });
 await apolloServer.start();
 apolloServer.applyMiddleware({ app, path: "/graphql" });
}
startServer();
 
app.listen(9000, () => {
 console.log("App listening in the port 9000");
 console.log(`gql path is ${apolloServer.graphqlPath}`);
});
 
