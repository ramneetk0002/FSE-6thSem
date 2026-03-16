import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

let users = [
  {
    id: 1,
    name: "ramneet",
    email: "ramneet@gmail.com",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "abc",
    email: "abc@example.com",
    phone: 1234567890,
  },
  {
    id: 3,
    name: "xyz",
    email: "xyz@gmail.com",
    phone: 1234567890,
  },
];

let blogs = [
  {
    id: 1,
    title: "Blog-1",
    description: "My first Blog",
    date: "12-03-2026",
    userID: 1,
  },
  {
    id: 2,
    title: "Blog-2",
    description: "My second Blog",
    date: "13-03-2026",
    userID: 2,
  },
];

const typeDefs = `#graphql

type User {
  id: ID!
  name: String
  email: String
  phone: Int
  blog: [Blog]
}

type Blog {
  id: ID!
  title: String
  description: String
  date: String
  userID: ID!
   user: User
}

type Query {
  getUsers: [User]
  getOneUser(_id: ID!): User
  getBlogs: [Blog]
  getBlogByID(_id: ID!): Blog
}

type Mutation {
  addUser(id: ID!, name: String, email: String, phone: Int): User
  deleteUser(id: ID!): [User]
  updateUser(id: ID!, name: String, email: String, phone: Int): User

  addBlog(id: ID!, title: String, description: String, date: String, userID: ID!): [Blog]
  deleteBlog(id: ID!): [Blog]
  updateBlog(id: ID!, title: String, description: String, date: String): Blog
}
`;

const resolvers = {
  Query: {
    getUsers: () => users,

    getOneUser: (_, args) => {
      return users.find((u) => u.id == args._id);
    },

    getBlogs: () => blogs,

    getBlogByID: (_, args) => {
      return blogs.find((b) => b.id == args._id);
    },
  },

  // Relation: User -> Blogs
  User: {
    blog: (parent) => {
      // parent ==> single user info
      return blogs.filter((b) => b.userID == parent.id);
    },
  },

  Mutation: {
    addUser: (_, args) => {
      let newUser = {
        id: args.id,
        name: args.name,
        email: args.email,
        phone: args.phone,
      };

      users.push(newUser);
      return newUser;
    },

    deleteUser: (_, args) => {
      users = users.filter((u) => u.id != args.id);
      return users;
    },

    updateUser: (_, args) => {
      let user = users.find((u) => u.id == args.id);

      if (!user) return null;

      user.name = args.name;
      user.email = args.email;
      user.phone = args.phone;

      return user;
    },

    addBlog: (_, args) => {
      let newBlog = {
        id: args.id,
        title: args.title,
        description: args.description,
        date: args.date,
        userID: args.userID,
      };

      blogs.push(newBlog);
      return blogs;
    },

    deleteBlog: (_, args) => {
      blogs = blogs.filter((b) => b.id != args.id);
      return blogs;
    },

    updateBlog: (_, args) => {
      let blog = blogs.find((b) => b.id == args.id);

      if (!blog) return null;

      blog.title = args.title;
      blog.description = args.description;
      blog.date = args.date;

      return blog;
    },
  },
  Blog:{
    user: (parent,args)=>{
        let user = users.find((u) => u.id == parent.userID);
        return user;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);