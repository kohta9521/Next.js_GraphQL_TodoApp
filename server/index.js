import { ApolloServer, gql } from "apollo-server";

// スキーマ定義
const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(title: String!): Todo
    deleteTodo(id: ID!): Todo
    toggleTodo(id: ID!): Todo
  }
`;

// ダミーデータ
let todos = [
  { id: "1", title: "GraphQLの公式ドキュメントを読む", completed: false },
];

// リゾルバ
const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (_, { title }) => {
      const newTodo = { id: String(todos.length + 1), title, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
    deleteTodo: (_, { id }) => {
      const deletedTodo = todos.find((todo) => todo.id === id);
      todos = todos.filter((todo) => todo.id !== id);
      return deletedTodo;
    },
    toggleTodo: (_, { id }) => {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return todo;
    },
  },
};

// ApolloServerのインスタンスを生成
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
