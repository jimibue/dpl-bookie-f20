## Starting a project

- having a thought out database design
- having UX figured out( basic user flows, wireframes), UI less important

  - UX user flows, what links, wire frame, how the app works
  - UI - Color, fonts, animation, change later in the developement, pretty easily

- A clear defined api

Before you start the more you can gather requirments and 'user stories' the more time you will save

- low hanging fruit
<!-- <!-- Alice  -->

MVP - Minimal Viable Product - what is the bare minium for us to release, consider completed

1. As Alice I want to be able to login to dpl-bookie.com and see this weeks gamese

- Use 3rd party api to pull game data/spread (limit to football)
- or own model, football, marble racing betting may not have an api _ Nice To Have_

- show time of Game
- the spread
- over under

2. Profile Info Tab

- add name
- add balance
- history _ Nice To Have_

3. Bet page where we can enter the amount to bet

<!-- Nice To Have -->

\*Change Password - requires mailers setup, and not as esy with devise_token_auth

As Alice I want to be able follow teams
Chat Feature

# models

https://stackoverflow.com/questions/14845295/rails-two-to-many-relationship

Team model
name: string
city: string
record: string
mascot: string

<!-- Model hasManyTrough
team_id
matchup_id:
end -->

Matchup # third party api
home_team_id: team.id
away_team_id: team.id
spread:
over_under:
result:
game_data: datetime

User
has_many bets

Bet model
user_id
amount
matchup_id
