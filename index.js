// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",masaiPremierLeague)
var leagueArr=[]
function masaiPremierLeague(){
    event.preventDefault()
    var matchNumber=masaiForm.matchNum.value

    var teamNameA=masaiForm.teamA.value

    var teamNameB=masaiForm.teamB.value

    var date=masaiForm.date.value

    var venue=masaiForm.venue.value

    var leagueObj={
        number:matchNumber,
        nameA:teamNameA,
        nameB:teamNameB,
        date:date,
        venue:venue,
    }
    
    leagueArr.push(leagueObj)
    console.log(leagueArr)
    localStorage.setItem("schedule",JSON.stringify(leagueArr))
}
