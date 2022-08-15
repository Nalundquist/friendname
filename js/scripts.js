console.log("I'm up top")

const friendNames = ["sally", "richard", "penelope", "flo"];
let friendGreet = "Hello my beloved ";

window.addEventListener("load", function(event){

	event.preventDefault();
	friendNames.forEach(function(friendName){
		friendGreetResponse = friendGreet + friendName + "!"
		console.log(friendGreetResponse);
	})
	
})

console.log("I'm at the bottom")

