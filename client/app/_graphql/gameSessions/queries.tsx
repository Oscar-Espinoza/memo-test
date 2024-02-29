import { gql } from "@apollo/client";

export const GET_GAME_SESSION = gql`
  query GetGameSession($id: ID!) {
    gameSession(id: $id) {
      id
      memoTest {
        id
        images
      }
      numberOfPairs
      retries
      score
      state
    }
  }
`;