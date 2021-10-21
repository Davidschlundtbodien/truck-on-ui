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

export const SINGLE_TRAIL = gql`
  query GetSingleTrail($id: Integer!) {
    trail(id: $id) {
      name
      difficulty
      traffic
      activities
    }
  }
`;
