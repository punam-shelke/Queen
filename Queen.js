// Checkpoint 1 | Creating the queen object
let queen = {
  direction : `S`
};


// Checkpoint 2 | Turning the queen
queen.changeDirection = function (dir){
    switch(dir){
    case `N`:
    queen.direction = `N`;
    break;
    case `S`:
    queen.direction = `S`;
    break;
    case `E`:
    queen.direction = `E`;
    break;
    case `W`:
    queen.direction = `W`;
    break;
    case `NE`:
    queen.direction = `NE`;
    break;
    case `NW`:
    queen.direction = `NW`;
    break;
    case `SE`:
    queen.direction = `SE`;
    break;
    case `SW`:
    queen.direction = `SW`;
    break;
    }      
  };
// Checkpoint 3 | Moving the queen
queen.position = 
    {
    x_coordinate:4,
    y_coordinate:0
    };

queen.moveForward = function(){
  queen.position.y_coordinate++;
}
// Checkpoint 4 | Jump move the queen
queen.jumpMoveForward = function(step){
  queen.position.y_coordinate += step;
}
// Checkpoint 5 |  Tracking the position
queen.whereabouts=[];
queen.updatePosition = function(){
  let pos = 8 - queen.position.y_coordinate;
  queen.whereabouts.push([`a${pos}`,`b${pos}`,`c${pos}`,`d${pos}`,`e${pos}`,`f${pos}`,`g${pos}`,`h${pos}`]);
}
// Bonus 1 - Gotta keep her in the battle!
  queen.moveForward = function(){
   if(queen.position.y_coordinate<7){
    queen.changeDirection(`S`);
    queen.position.y_coordinate++;
    queen.updatePosition();   
   }
   else{
     console.error(`position ${queen.position.y_coordinate} cannot be crossed`);
   }
  
}

queen.jumpMoveForward = function(step){
  if(queen.position.y_coordinate + step < 8){
    queen.changeDirection(`S`);
    queen.position.y_coordinate += step;
    queen.updatePosition();
  }
  
  else
    console.error(`cannot take ${step} steps jump`);
}
// Bonus 2 - The queen is more powerful than what you think!
  queen.moveBackward = function(){
        if(queen.position.y_coordinate>0){
            queen.changeDirection(`N`);
            queen.position.y_coordinate--;
            queen.updatePosition();   
        }
        else{
            console.error(`position ${queen.position.y_coordinate} cannot be crossed`);
        }
  
    }

queen.jumpMoveBackward = function(step){
  if(queen.position.y_coordinate - step >= 0){
    queen.changeDirection(`N`);
    queen.position.y_coordinate -= step;
    queen.updatePosition();
  }
  
  else
    console.error(`cannot take ${step} steps jump`);
}   
// Bonus 3 - How about multiple queens?
// NOT YET DONE.
//demonstration
//updating initial position
queen.updatePosition();
//moving 3 steps forward
queen.moveForward();
queen.moveForward();
queen.moveForward();
//checking position
console.log(queen.whereabouts);
//2steps back
queen.jumpMoveBackward(2);
console.log(queen.whereabouts);
//2 more steps back will generate error
queen.moveBackward();
queen.moveBackward();





