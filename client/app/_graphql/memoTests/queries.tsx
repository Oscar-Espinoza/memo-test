import { gql } from "@apollo/client";

export const GET_MEMO_TESTS = gql`
query GetMemoTests {
  memoTests {
    id
    name
    images
    highestScore
  }
}`;