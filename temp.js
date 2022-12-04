function sayHi(){
	console.log("Hello")
}
function hiAndBye(func){
func()
console.log("Bye");
}
hiAndBye(function () {
console.log("Greeting");
})