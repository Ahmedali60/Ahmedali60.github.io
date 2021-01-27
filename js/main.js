let Q=[
{"question":"Do You feel fever?",
"options":["No","A bit","Normal","Yes"],
"imagelink":"fever.jpg",
},

{"question":"Do You Have Dry Cough?",
"options":["No","A bit","Normal","Yes"],
"imagelink":"cough.jpg",
},
{"question":"Do You Fell Tiredness Too Quickly?",
"options":["No","A bit","Normal","Yes"],
"imagelink":"tired.jpg",
},

{"question":"Are You Experiencing Aches Or Pain?",
"options":["No","A Bit","Normal","Severe"],
"imagelink":"pain.jpg",
},

{"question":"Are You Experiencing Sore Throat?",
"options":["No","A Bit","Normal","Severe"],
"imagelink":"sore.jpg",

},

{"question":"Are You Experiencing Diarrhea?",
"options":["No","A Bit","Normal","Severe"],
"imagelink":"tissue.jpg",

},

{"question":"Are You Experiencing Pinkish Eyes(Conjunctivitis)?",
"options":["No","Tearful Eyes","Itchy Eyes","Redness In White Of Eyes"],
"imagelink":"pink.jpg",

},

{"question":"Are You Experiencing Any Level Of Difficulty In Breathing?",
"options":["No","A Bit","Normal","Severe"],
"imagelink":"panting.jpg",

},

{"question":"Loss Of Sense Of Taste Or Smell?",
"options":["No","A bit","Normal","Severe"],
"imagelink":"taste.jpg",

},

{"question":"Do You Experience Any Of Following, RASHES, Discolouration Of Finger Or Toes?",
"options":["No","A Bit","Normal","Severe"],
"imagelink":"discolouration.jpg",

}


]


let P=[
{"Tip":"You Have Lowest Chances Of Covid,Clean your hands often. Use soap and water, or an alcohol-based hand rub.",

},

{"Tip":"You Have Low Chances Of Covid,Maintain a safe distance from anyone who is coughing or sneezing.",
},

{"Tip":"You Have Moderate Chances Of Covid But Try To Be Cautious.",

},

{"Tip":"You Have High Chances Of Covid,Don’t touch your eyes, nose or mouth.Try To Quarantine Yourself",

},

{"Tip":"You Have Highest Chances Of Covid,Try To Quarantine Yourself And Tested Imediately",

},

]



responses=[]
var i=0;
let question=document.getElementById('question').innerHTML=Q[0]["question"]
for(let j=0;j<Q[0]['options'].length;j++){
	document.getElementById("options").innerHTML+='<div><input type="radio" id="option" name="drone" value='+j+'><label for="huey">'+Q[0]["options"][j]+'</label><div>'


}


document.getElementById("img").src = "./img/"+Q[0]["imagelink"];


document.getElementById("next").addEventListener("click",()=>{
console.log(i)
if(i==9){
	document.getElementById("img").src = "./img/9.jpg"
	document.getElementById("img").style.width="100%"
	document.getElementById("img").style.height="400px"
	sum=0
	for(let i=0;i<responses.length;i++){
		sum=sum+parseInt(responses[i])
	}
	per=(sum/40)*100
	if(per>=80){
	document.getElementById("card").innerHTML="<div style='text-align: center;font-weight:bold;    font-size: 2rem;'>"+P[4]['Tip']+"</div>"
	}
	else if(per>=60){
	document.getElementById("card").innerHTML="<div style='text-align: center;font-weight:bold;    font-size: 2rem;'>"+P[3]['Tip']+"</div>"
	}
	else if(per>=40){
	document.getElementById("card").innerHTML="<div style='text-align: center;font-weight:bold;     font-size: 2rem;'>"+P[2]['Tip']+"</div>"
	}
	else if(per>=20){
	document.getElementById("card").innerHTML="<div style='text-align: center;font-weight:bold;     font-size: 2rem;'>"+P[1]['Tip']+"</div>"
	}
	else{
		document.getElementById("card").innerHTML="<div style='text-align: center;font-weight:bold; font-size:14;'>"+P[0]['Tip']+"</div>"
	}
}

else{
if ($("input[type=radio]:checked").length > 0) {
	let options=document.querySelectorAll("[id='option']");
	let sel = document.querySelector("input[id=option]:checked").value;
	console.log(sel)
	responses[i]=parseInt(sel)+1
	console.log(responses)
   
	i++;
let question=document.getElementById('question').innerHTML=Q[i]["question"]
document.getElementById("options").innerHTML=""
for(let j=0;j<Q[i]['options'].length;j++){
	document.getElementById("options").innerHTML+='<div><input type="radio" id="option" name="drone" value='+j+'><label for="huey">'+Q[i]["options"][j]+'</label></div>'
	document.getElementById("img").src = "./img/"+Q[i]["imagelink"];


}

}
else{
	alert("Please Select Any Option")
}
}
})




document.getElementById("back").addEventListener("click",()=>{
	i--;
let question=document.getElementById('question').innerHTML=Q[i]["question"]
document.getElementById("options").innerHTML=""
for(let j=0;j<Q[i]['options'].length;j++){
	document.getElementById("options").innerHTML+='<div><input type="radio" id="option" name="drone" value='+j+'><label for="huey">'+Q[i]["options"][j]+'</label></div>'
	document.getElementById("img").src = "./img/"+Q[i]["imagelink"];


}})






