var yes = confirm("Would you like to play a game? 'yes or no'.");
var points = 0;
if(yes){
    game();
    points++;
} else {alert("then dont play a game");
  console.log("your have "+ points +" points");

}
function game(){
var knock = prompt("you are sitting in a dark room and hear a knock at the door. 'ask who is there' or 'stay quiet' ");
  
  if(knock == "ask who is there"){
      askWho();
      points++;
      console.log("your have "+ points +" points");
  } else if(knock == "stay quiet"){
      stayQuiet();
      points++;
      console.log("your have "+ points +" points");
  } else{
      var error = confirm("you typed something in wrong. would you like to restart?");
      if(error){
        game();
      } else {
          alert("goodbye");
          points++;
          console.log("your have "+ points +" points");
      }
      
  }
  //asking who is there--first option
  function askWho () {
    var open =  confirm("you hear a man say 'you know who it is.', do you open the door and let him in?");
     if(open) {
         alert("you opened the door to a man that wanted you dead. he quickly shoves you into the room and slams the door shut behind him. you hit your head on the table as you fall backward and get knocked out never to wake again.");
         alert("THE END");
         points++;
         console.log("your have "+ points +" points");
     } else {
         alert("he breaks down the door and kills you");
        var stay = confirm("RESTART?");
        if(stay) {
            points++;
         console.log("your have "+ points +" points");
            game();
        } else { 
            alert("goodbye");
            points++;
         console.log("your have "+ points +" points");
        }
     }
 }
// end of asking who is there -- first option

// stay quiet option 


function stayQuiet (){
   var stillHere = confirm("the strange man hangs around outside the door for a few minutes and you think that you hear him walk away. Do you open the door to see if he is still there?");
    if(stillHere){
        points++;
         console.log("your have "+ points +" points");
       var chase = confirm("you open the door but the strange man is nowhere to be found. do you chase after him?")
       if(chase){
        points++;
        console.log("your have "+ points +" points");
            alert("you chase after him only to find that he is a murderer and he kills you.");
            var chaseRestart = confirm("RESTART GAME?");
            if(chaseRestart){
                game();
            } else{
                alert("goodbye");
                points++;
        console.log("your have "+ points +" points");
            }
       } else if(chase == false){
        points++;
        console.log("your have "+ points +" points");
           alert("you dont chase after him and you sit there in the dark room until sunrise.");
           alert("sunrise comes and you exit the dark room to the parking lot and continue your journey to ZION...");
          var restarting = confirm("TO BE CONTINUED....Restart?");
          if(restarting){
              game();
              points++;
         console.log("your have "+ points +" points");
          } else {
              alert("goodbye");
              points++;
         console.log("your have "+ points +" points");
          }
       }
    
    }else {
        points++;
         console.log("your have "+ points +" points");
       var pack =  confirm("you stay inside and try to call the police but the line is dead. this is strange because you were just talking to the front desk moments before. You get an uneasy feeling that makes you want to leave. Do you start packing up?");
         if(pack){
            points++;
            console.log("your have "+ points +" points");
            packing();
         } else if(pack == false){
            points++;
            console.log("your have "+ points +" points");
             alert("you try to calm down and go to sleep. you wake up the next morning to find that some homeless guy stole your car.");
            var restart=  confirm("THE END... Restart?" );
                if(restart){
                    points++;
         console.log("your have "+ points +" points");
                    game();
                } else {
                    alert("Goodbye");
                    points++;
         console.log("your have "+ points +" points");
                }
         }
    }
    }





function packing() {
    points++;
         console.log("your have "+ points +" points");
    alert("you pack up your stuff as fast as you can and rush out the door to your car and take off down the road in to the moonless night.");
    alert("a few minutes into your drive you see headlights in the distance through your rearview mirror.");
    var speed = confirm("you are positive that the headlights belong to the man that mysteriously knocked on your door. do you speed up?");

    if(speed){
        points++;
         console.log("your have "+ points +" points");
        alert("your spedometer reads over 100Mph as you tear down the road with no car in sight except the headlights behind you that are drawing closer...");
       var tooFast = confirm("there is a sharp turn coming up. 'speed up' or 'slow down'. if you slow down the man is sure to catch you... ");
       if (tooFast){
        points++;
        console.log("your have "+ points +" points");
        alert("you speed up and take the turn just in time to miss flying to an early grave");
        carChase();
 function carChase() {
    
     alert("you push your car to the limit and hear it whining and feel it nearly shaking apart");
     alert("you see a place to stop where you might get the advantage over the mystery man that has been following you.");
    var chaseEnder = prompt("you stop and wait as the mans car comes around the corner... this is it. you have the chance to knock him off the road and end this chase once and for all... what do you want to do? 'shoot his tires out' or 'wave him down' ")
    if(chaseEnder == "shoot his tires out") {
        points++;
         console.log("your have "+ points +" points");
        alert("you fire off an entire mag into his car and successfully shoot two of his tires out and he loses control of the car.");
        alert("unfortunately, his car ends up coming right for you and rams into you with the force of 1000 horses.");
        alert("you wake up in a prison hospital in siberia and find out that the United States government has disowned you and denied any knowledge of your involvement within the CIA.");
        alert("it is now up to you to escape your captors, return to America and kill everyone that did you wrong.");
       var shoot = confirm("Well done. You made it the furthest in the game. Congratulations.......RESTART? IF YOU WANT TO SEE YOUR POINTS PLEASE SELECT CANCEL AND EXIT GAME");
        if(shoot){
            points++;
         console.log("your have "+ points +" points");
            game();
        } else{
            alert("until next time...");
            points++;
         console.log("your have "+ points +" points");
        }
    }else if(chaseEnder == "wave hime down"){
        points++;
         console.log("your have "+ points +" points");
            alert("the mans car comes around the corner and slows to a stop. he gets out and shoots you in the head.");
           var wave= confirm("GAME OVER...RESTART?");
            if(wave){
                points++;
         console.log("your have "+ points +" points");
                game();
            } else ("Better luck next time");
            points++;
         console.log("your have "+ points +" points");
    }
 }

    }else { 
        points++;
         console.log("your have "+ points +" points");
        alert("you slow down cautiously to see if you can recognize the car that is following you but then you hear gunshots ring out.");
        alert("you frantically swerve from side to side trying to avoid an early grave, until a turn that you failed to notice catches you off guard and sends your car flying into a ditch on the side of the road.");
        alert("as your car is tumbling through the air your whole life flashes through your eyes and you realize just how scared of death that you are. but its too late...");
        alert("you slam into the ditch and your car immediately bursts into flames. you feel the intense heat from the flames, and feel your skin being burned beyond repair as you fight to get out of the car.");
        alert("you are nearly out when things start to go dark and you black out from the pain.");
        var burnedToDeath = confirm("GAME OVER...restart?");
   if(burnedToDeath){
    points++;
    console.log("your have "+ points +" points");
       game();
   } else {
    alert("Thanks for playing, better luck next time");
    points++;
         console.log("your have "+ points +" points");

}  
} 
    }  else if(speed == false) {
        points++;
         console.log("your have "+ points +" points");
        alert("you try to keep a normal speed but you get distracted while looking at the spedometer and you are swerving all over the road.");
        alert("it turns out that the car behind you was a cop and he pulls you over");
       var bribe = confirm("do you try to bribe the cop? yes or no.");
       if (bribe) {
        points++;
        console.log("your have "+ points +" points");
           alert("this cop doesnt take bribes and you end up in jail for the night");
           var bribeRestart = confirm("be more careful next time...RESTART?");
           if(bribeRestart){
            points++;
            console.log("your have "+ points +" points");
               game();
           } else {
               alert("goodbye");
               points++;
         console.log("your have "+ points +" points");
           }
       } else {
        points++;
        console.log("your have "+ points +" points");
           alert("the cop lets you off with a warning and you are on your way again.");
           var noBribeRestart = confirm("THE END...RESTART?");
           if(noBribeRestart){
            points++;
            console.log("your have "+ points +" points");
               game();
           } else{ 
               
               alert("goodbye");
               points++;
         console.log("your have "+ points +" points");
            }
       }
    }
    
}
  
  }


