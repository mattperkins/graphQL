const {
GraphQLObjectType,
GraphQLString,
GraphQLInt,
GraphQLSchema,
GraphQLList,
GraphQLNonNull
} = require('graphql');

// Hardcoded data in lieu of a Database call
const customer = [
{id: '1', name: 'Sandy', email: 'sandy@email.com', age:19},
{id: '1', name: 'Max', email: 'max@email.com', age:30},
{id: '1', name: 'Fred', email: 'fred@email.com', age:44},
]
// Customer Type
const CustomerType = new GraphQLObjectType({
name: 'Customer',
fields: () => ({
id: {type: GraphQLString},
name: {type: GraphQLString},
email: {type: GraphQLString},
age: {type: GraphQLInt},
})
})
// Root Query
const RootQuery = new GraphQLObjectType({
name: 'RootQueryType',
fields: {
 customer: {
 type: CustomerType,
 args: {
 id: {type: GraphQLString}
 },
 resolve(parentValue, args){
 for (let i=0; i < customers.length; i++){
 if(customers[i].id == args.id){
 return customers[i]
 }	
 }
 }
 } 
}
})

module.exports =  new GraphQLSchema({
query: RootQuery
})
