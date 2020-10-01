// Team model
// name: string
// city: string
// record: string
// mascot: string
// icon: string

// <!-- Model hasManyTrough
// team_id
// matchup_id:
// end -->

// Matchup # third party api
// home_team_id: team.id
// away_team_id: team.id
// spread:
// over_under:
// result:
// game_date: datetime
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Matchup from "./Matchup";
import { COLORS, PADDINGS } from "../styles";

const ATL = {
  name: "Falcons",
  city: "Atlanta",
  record: "0-3",
  icon: "Falcons",
  mascot: "Falcons",
};

const SANFRAN = {
  name: "SANFRAN",
  city: "SANFRAN",
  record: "3-0",
  icon: "miner",
  mascot: "49ers",
};

const dummyMatchups = [
  {
    id: 1,
    home_team: ATL,
    away_team: SANFRAN,
    spread: -7.5,
    over_under: 12,
    date: "June 27",
  },
  {
    id: 2,
    home_team: SANFRAN,
    away_team: ATL,
    spread: -8.5,
    over_under: 32,
    date: "June 27",
  },
];

const Matchups = () => {
  const [matchups, setMatchUps] = useState(dummyMatchups);
  return (
    <Container>
      <h1>This weeks matchups</h1>
      {matchups.map((matchup) => (
        <Matchup {...matchup} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLORS.BACKGROUND};
  padding: ${PADDINGS.MEDUIM};
  min-height: 100vh;
`;

export default Matchups;
