import React from "react";
import styled from "styled-components";
import { COLORS, BORDER_RADIUS, PADDINGS } from "../styles";

const Matchup = ({ home_team, away_team, over_under, spread, date }) => {
  return (
    <MatchupCard>
      <MatchupInfo>
        <Text weight={700}>{date}</Text>
        <Text size="small" weight={200}>
          spread: {spread}
        </Text>
        <Text size="small" weight={200}>
          over_under: {over_under}
        </Text>
      </MatchupInfo>
      <MatchupTeams>
        <SpanText size="large" weight={700}>
          {home_team.name}
        </SpanText>
        <SpanText weight={200} style={{ paddingRight: "10px" }}>
          {`(home)`}
        </SpanText>
        <SpanText weight={700} style={{ paddingRight: "10px" }}>
          vs{" "}
        </SpanText>
        <SpanText size="large" weight={700} style={{ paddingRight: "10px" }}>
          {away_team.name}
        </SpanText>
      </MatchupTeams>
      <MatchupLinks>
        <Button>Bet</Button>
      </MatchupLinks>
    </MatchupCard>
  );
};

const MatchupCard = styled.div`
  display: flex;
  justify-content: space-between;
  aligin-content: center;
  aligin-items: center;
  background-color: ${COLORS.WHITE};
  border-radius: ${BORDER_RADIUS.DEFAULT};

  margin: ${PADDINGS.MEDUIM};
`;

const MatchupInfo = styled.div`
  padding: ${PADDINGS.SMALL};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
const MatchupTeams = styled.div`
  padding: ${PADDINGS.SMALL};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MatchupLinks = styled.div`
  display: flex;
  padding: ${PADDINGS.SMALL};
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.SECONDARY};
`;

// throw into another file and import
const Button = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.PRIMARY};
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.ALERT};
  font-size: 14px;
  padding: ${PADDINGS.SMALL} ${PADDINGS.MEDUIM};
  border-radius: ${BORDER_RADIUS.DEFAULT};
`;

// throw into another file and import
// defintion
const getFontSize = (fontSizeYO) => {
  if (fontSizeYO === "large") {
    return "22px";
  }
  if (fontSizeYO === "small") {
    return "10px";
  }
  return "14px"; // should hardcode in style
};

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-size: ${({ size }) => getFontSize(size)};
`;

const SpanText = styled.span`
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-size: ${({ size }) => getFontSize(size)};
`;

export default Matchup;
