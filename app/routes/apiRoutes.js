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

    totalDifference = 0;

    for(let i = 0; i < friends.length; i++){
        console.log(friends[i].name);
        totalDifference = 0;
        for(var j = 0; j < 10; j++){
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

          if (totalDifference <= bestMatch.friendDifference){
            bestMatch.name = friends[1].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendsDifference = totalDifference;

            console.log(totalDifference);
            console.log(bestMatch.friendDifference);
          }
        }
    }
      friends.push(req.body);

      res.json(bestMatch);
    //get array from friends.js 


  });
};

