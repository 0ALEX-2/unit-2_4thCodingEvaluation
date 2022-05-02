// write js code here corresponding to matches.html
var tRow =document.createElement("tr")

    var td1=document.createElement("td")
   
    var td2=document.createElement("td")
    
    var td3=document.createElement("td")
    
    var td4=document.createElement("td")
  
    var td5=document.createElement("td")
  
    var td6=document.createElement("td")
    
    tRow.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tRow)
    
    var data = JSON.parse(localStorage.getItem(schedule))

