function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqouise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function awayTeamName() {
    let object = gameObject();
    return object["away"]["teamName"];
}

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
// Think about where in the object you will find a player's points.
// How can you iterate down into that level?
// Think about the return value of your function.

function homeTeam() {
    return gameObject().home;
}

function awayTeam() {
    return gameObject().away;
}

function players() {
    // return {...homePlayers, ...awayPlayers};
    return Object.assign({}, homeTeam().players, awayTeam().players);
}

function numPointsScore(playerInput) {
    return players()[playerInput].points;
    /*
      Object.keys(players());
      Object.values(players());
      Object.entries(players());

      let points;

      const playerArrays = Object.entries(players())

      // forEach, map, filter, find, reduce
      playerArrays.forEach(playerArray => {

      if (playerArray[0] === playerInput) {
      points = playerArray[1].points;
      }
      });

      const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
      
      return player[1].points;
      
      for (const playerName in players()) {
      if (playerName === playerInput) {
      return players()[playerName].points;
      }
      }
    */
}

numPointsScore("DeSagna Diop");

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
// Think about how you will find the shoe size of the correct player.
// How can you check and see if a player's name matches the name that has been passed into the function as an argument?
function shoeSize(playerName) {
    // Create a 'players' object so that we can filter it for the 'name' accordingly so that we can grab that person's shoe size:
    const players =  Object.assign({}, homeTeam().players, awayTeam().players);
    // ISSUE:
    // I am unable to use '.filter()' for the 'players' object I created:
    // Use Array.prototype.filter() to filter out for the 'name' property:
    // const matchingPlayer = players.filter(function (player) {
    let matchingPlayerShoeSize;
    for (let player in players) {
        if (player === playerName) {
            matchingPlayerShoeSize = players[player]["shoe"];
        }
    }

    return matchingPlayerShoeSize;
}

shoeSize("Jeff Adrien");

// From Walkthrough Video:
function findByTeamName(teamName) {
    return teams.find(team => teamName === team.teamName);
}

// From Walkthrough Video:
// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
// function teamColors(homeOrAway["teamName"]) {
function teamColors(teamName) {
    return findByTeamName(teamName).colors;
}

// From Walkthrough Video:
// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(gameObject) {
    // return [gameObject["home"]["teamName"], gameObject["away"]["teamName"]];
    return team.map(team => team.teamName);
}

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamNameChoice) {
    homeTeamObj = homeTeam();
    awayTeamObj = awayTeam();
    // Cycle through the 'players' object to create an array of each of the jersey numbers:
    let jerseyNumbersArray = [];    
    let homePlayers = homeTeamObj["players"];
    let awayPlayers = awayTeamObj["players"];
    // let matchingPlayerShoeSize;
    for (let player in homePlayers) {
        jerseyNumbersArray.push(homePlayers[player]["number"]);
    }
    for (let player in awayPlayers) {
        jerseyNumbersArray.push(awayPlayers[player]["number"]);
    }
    return jerseyNumbersArray;

}

playerNumbers("Brooklyn Nets");

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerName) {
    const players =  Object.assign({}, homeTeam().players, awayTeam().players);
    const specificPlayerStats = players[playerName];
    return specificPlayerStats;
}

playerStats("Reggie Evans");

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
// Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
function bigShoeRebounds() {
    const players =  Object.assign({}, homeTeam().players, awayTeam().players);

    let maxShoeSize;
    let playerDecision;

    for (let player in players) {
        if(!maxShoeSize || players[player]["shoe"] > maxShoeSize["shoe"]) {
            playerDecision = player;
            maxShoeSize = players[player]["shoe"];
        }
    }

    let playerRebounds = players[playerDecision]["rebounds"];

    return playerRebounds;
}

bigShoeRebounds();

// Bonus Points:
// Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    const players =  Object.assign({}, homeTeam().players, awayTeam().players);

    let maxPoints;
    let playerDecision;

    for (let player in players) {
        if(!maxPoints || players[player]["points"] > maxPoints["points"]) {
            playerDecision = player;
            maxPoints = players[player]["points"];
        }
    }

    // NOTE: I don't think this is accurate, but this is just for 'bonus' for the attempt
    // Not sure this doesn't match 'bigShoeRebounds()' function's logic though
    return playerDecision;
}

mostPointsScored();

// Which team has the most points? Call the function winningTeam.
// Which player has the longest name? Call the function playerWithLongestName.
