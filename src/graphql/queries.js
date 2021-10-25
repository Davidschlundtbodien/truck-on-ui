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
  query trail ($id: ID!) {
    trail (id: $id) {
      id
      name
      description
      elevationGain
      distance
      nearestCity
      routeType
      temp
      conditions
      difficulty
      traffic
      comments {
        id
        content
      }
      tags {
        name
      }
    }
  }
`;
