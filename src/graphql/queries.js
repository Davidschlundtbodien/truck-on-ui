import { gql } from "@apollo/client";

export const TRAIL_INDEX = gql`
  query GetTrailIndex {
    trails {
      name
      difficulty
      traffic
      activities
    }
  }
`;
