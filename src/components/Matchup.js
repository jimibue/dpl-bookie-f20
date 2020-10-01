import React from "react";
import styled from "styled-components";
import { COLORS, BORDER_RADIUS, PADDINGS } from "../styles";

const Matchup = ({ home_team, away_team, over_under, spread, date }) => {
  return (
    <MatchupCard>
      <MatchupInfo>
        <Text bold>{date}</Text>
        <Text thin>{spread}</Text>
        <Text thin>{over_under}</Text>
      </MatchupInfo>
      <MatchupTeams>
        {home_team.name}:home vs {away_team.name} center
      </MatchupTeams>
      <MatchupLinks>bet link right</MatchupLinks>
    </MatchupCard>
  );
};

const MatchupCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.WHITE};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  padding: ${PADDINGS.MEDUIM};
  margin: ${PADDINGS.MEDUIM};
`;

const MatchupInfo = styled.div``;
const MatchupTeams = styled.div``;
const MatchupLinks = styled.div``;

const Text = styled.p``;

export default Matchup;
