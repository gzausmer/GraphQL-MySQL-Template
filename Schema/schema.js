import { makeExecutableSchema } from 'graphql-tools';
import {typeDefs} from "../Types/types";
import {resolvers} from "../Resolvers/resolvers";

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});