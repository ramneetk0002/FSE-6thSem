import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users=[{
    id:"1",
    name:"ramneet",
    email:"ramneet.be23@chitkara.edu.in",
    phone:6329
},
{
    id:"2",
    name:"abc",
    email:"abc6.be23@chitkara.edu.in",
    phone:2034
}
]
const typeDefs =`
#user==>comment

type User{
id:ID !,#id serialized into string
name:String,
email:String,
phone:Int

}

type Query{
getUsers:[User],
getOneUser(id:ID!):User
}

#Mutation
`
const resolvers={
    Query:{
        getUsers:()=>{
            return Users;
        },
        //in resolver we have 4 arguments-->parent,args,context,info-->optional args are object which contains all the input++> getOneUser(name,email,id)
        getOneUser:(_,args)=>{
            return users.find(user=>user.id==args.id);

        }
    }
    //Mutation:{}
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);