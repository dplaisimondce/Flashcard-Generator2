function BasicCard(front,back){
	this.front = front;
	this.back = back;

}
BasicCard.prototype.print= function(){
	console.log("front of card " + this.front);
	console.log("back of card " + this.back);
}

module.exports = BasicCard;


