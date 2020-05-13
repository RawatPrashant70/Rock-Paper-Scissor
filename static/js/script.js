function rps(yourchoice)
{
    //console.log(yourchoice)

    var humanChoice, BotChoice ;
    humanChoice = yourchoice.id ;
    
    BotChoice = bc() ;
    
    var winner = winnerkon(humanChoice, BotChoice) ;   // [0,1], [1,0], [0.5,0.5]
    console.log(winner)

    var result = resultdikhao(winner) ; // {'message': 'U Won', 'Color' : ---- }
    console.log(result)

    frontEnd(humanChoice, BotChoice, result);

}

function bc()
{   var select ;
    select =  Math.floor(Math.random()* 3)
    return ['rock', 'paper', 'scissor'][select]
}

function winnerkon(humanChoice, BotChoice)
{
    rpsDatabase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5}
    }

    var yourScore = rpsDatabase[humanChoice][BotChoice] ;
    var botScore = rpsDatabase[BotChoice][humanChoice] ;

    return [yourScore, botScore] ;
}

function resultdikhao([yourScore, botScore])
{
    if(yourScore === 0)
    {
        return {'message': 'You Lost !', 'color': 'red'}
    }
    else if (yourScore === 1)
    {
        return {'message': 'You Won !', 'color': 'green'}
    }   
    else
    {
        return {'message': 'Tie !', 'color': 'yellow'}
    }   

}

function frontEnd(humanChoiceImg, BotChoiceImg, result)
{
    var ImgDatabase = {
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src ,
        'scissor': document.getElementById('scissor').src 
    }
   // console.log(ImgDatabase[humanChoiceImg])
    
    document.getElementById('rock').remove() ;
    document.getElementById('paper').remove() ;
    document.getElementById('scissor').remove() ;

    var humanDiv = document.createElement('div') ;
    var BotDiv  = document.createElement('div') ;
    var messageDive = document.createElement('div') ;

    humanDiv.innerHTML = "<img src='"+ ImgDatabase[humanChoiceImg] + "' height='200' width='200' style = ' box-shadow:  0px 10px 50px rgba(37, 50, 233, 1)' > " ;
    messageDive.innerHTML = "<h2 style= 'color:" + result['color'] + "; font-size: 60px; padding: 30px; '>" + result['message'] + "</h2>" ;
    BotDiv.innerHTML = "<img src='"+ ImgDatabase[BotChoiceImg] + "' height='200' width='200' style = ' box-shadow:  0px 10px 50px rgba(233, 50, 23, 1)'> " ;


    document.getElementById("inner-container-flex").appendChild(humanDiv) ;
    
    document.getElementById("inner-container-flex").appendChild(messageDive);

    document.getElementById("inner-container-flex").appendChild(BotDiv) ;


    setTimeout("location.reload(true);",2000)
}