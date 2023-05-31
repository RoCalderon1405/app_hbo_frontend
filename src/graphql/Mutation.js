import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String, $password: String) {
    createUser(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie(
    $_id: ID
    $tittle: String
    $description: String
    $likes: Int
    $image: String
    $dateOfRelease: String
  ) {
    updateMovie(
      _id: $_id
      tittle: $tittle
      description: $description
      likes: $likes
      image: $image
      dateOfRelease: $dateOfRelease
    ) {
      _id
      tittle
      description
      image
      likes
      dateOfRelease
    }
  }
`;
