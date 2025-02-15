const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addSong(input: songInput!): Song!
    addReview(input: reviewInput!): Review!
  }

  type Query {
    welcome: String!
    user(id: ID!): User!
    reviewBySongId(song_id: ID!): Review!
    songByArtist(artist: String!): Song!
    songByGenre(genre: String!): Song!
  }

  type User {
    id: ID!
    email: String!
    first_name: String!
    last_name: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  type Review {
    id: ID!
    song_id: ID!
    rating: Float
    name: String!
    review: String
    rating_user_id: ID!
    rated_at: String!
  }

  type Song {
    id: ID!
    name: String!
    artist: String!
    genre: String
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input songInput {
    id: ID!
    name: String!
    artist: String!
    genre: String
  }

  input reviewInput {
    id: ID!
    song_id: ID!
    rating: Float
    name: String!
    review: String
    rating_user_id: ID!
    rated_at: String!
  }
`
