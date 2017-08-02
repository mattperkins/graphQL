# 'npm run s' = nodemon server.js

# http://localhost:4000/graphiql

# 'npm run jsn' = json-server --watch data.json

# http://localhost:3000/


# GraphiQL

## Fetch customer request
```
{
 customer(id: "1"){
 name, email, age
  }
}
```
## addCustomer
```
mutation{
 addCustomer(name: "Fred Bloggs", email: "fred@blogs.com", age: 99)
 {id, name, email}
}
```
## deleteCustomer
```
mutation{
 deleteCustomer(id: "1")
 {id}
}
```
## editCustomer
```
mutation{
 editCustomer(id: "2", name: "Heidi Sloane")
 {id, name}
}
```
