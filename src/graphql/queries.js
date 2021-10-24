import { gql } from "@apollo/client";

export const TRAIL_INDEX = gql`
  query trails {
    trails {
      id
      name
      difficulty
      traffic
      routeType
      tags {
        name
      }
    }
  }
`;

export const SINGLE_TRAIL = gql`
  query GetSingleTrail($id: Integer!) {
    trail(id: $id) {
      id
      name
      description
      elevationGain
      nearestCity
      difficulty
      traffic
    }
  }
`;
