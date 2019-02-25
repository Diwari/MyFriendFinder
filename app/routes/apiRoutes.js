let friends = require("../data/friends");
let path = require("path");

module.exports = function(app){

  app.get("/app/data/friends", function(req, res){
    res.json(friends);
  });
  app.post("/app/data/friends", function(req,res){
    

    
    let bestMatch = {
      name:"",
      photo:"",
      difference: 1000

    };
    console.log(req.body);
    userName = req.body.name;
    userPhoto = req.body.photo;
    userScores = req.body.scores;

    let totalDifference;
    
    for(let i = 0; i < friends.length; i++){
        // console.log(friends[i].name);
        // console.log(friends[i].photo);
        // console.log(friends[i].scores);
        totalDifference = 0;
        let currentFriend = friends[i];

        for(var j = 0; j < currentFriend.scores.length ; j++){
          let currentFriendScore = currentFriend.scores[j];
          let currentUserScores = userScores[j];

        
          totalDifference += Math.abs(parseInt(currentUserScores) - parseInt(currentFriendScore));

          if (totalDifference <= bestMatch.difference){
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.difference = totalDifference;
          }
        }

         
        console.log(totalDifference);
        console.log(bestMatch.difference);
    }console.log(bestMatch);
      friends.push(req.body);

      res.json(bestMatch);
    //get array from friends.js 


  });
};

