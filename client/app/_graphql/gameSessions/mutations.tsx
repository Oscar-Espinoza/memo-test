import { gql } from "@apollo/client";

export const CREATE_GAME_SESSION = gql`
  mutation CreateGameSession(
    $memoTestId: ID!,
    $numberOfPairs: Int!,
    $retries: Int!,
    $score: Int!,
    $state: State
  ) {
    createGameSession(
      memo_test_id: $memoTestId,
      numberOfPairs: $numberOfPairs,
      retries: $retries,
      score: $score,
      state: $state
    ) {
      id
    }
  }
`;

export const UPDATE_GAME_SESSION = gql`
mutation UpdateGameSession($id: ID!, $retries: Int!, $state: State) {
  updateGameSession(id: $id, retries: $retries, state: $state) {
    score
  }
}
`;