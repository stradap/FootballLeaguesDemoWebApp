import gql from 'graphql-tag';
import { Team } from '../generated/types';

const TEAMS_QUERY = gql`
  query teams($leagueId: String!) {
    teams(leagueId: $leagueId) {
      _id
      name
    }
  }
`;

type TeamsQueryDataType = {
  teams: Team[]
};

export type TeamsQueryData = TeamsQueryDataType;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const TEAM_QUERY = gql`
  query team($teamId: String!) {
    team(teamId: $teamId) {
      _id
      name
      league {
        _id
      }
      players {
        _id
        name
        nationality
        shirtNumber
        position
      }
    }
  }
`;

type TeamQueryDataType = {
  team: Team | null
};

export type TeamQueryData = TeamQueryDataType;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

export {
  TEAMS_QUERY,
  TEAM_QUERY
};