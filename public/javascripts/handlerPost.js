/*Funkcion send() used to POST score which player get during present level
*  used by buttons #to_save and #to_nextLevel in SpaceInviders.html  */

function send( urlToPost, urlToGo, msg ){
    if($.post( urlToPost,{
        "points": GameSpace.score
    } )){
        alert(msg);
        window.location.href = urlToGo;
    }
}
