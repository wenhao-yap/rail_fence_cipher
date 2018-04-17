class RailFence{
	constructor(input){
		this.input = input;
		this.output = "";
		console.log("input: " + this.input);
	}

	encode(){
		this.output = this.change(0,4) + this.change(1,2) + this.change(2,4);
		console.log("output: " + this.output);
	}

	change(start,increment){
		let temp = "";
		for(let i = start; i<this.input.length;i+=increment){
			temp += this.input.charAt(i);
		}
		return temp;
	}
}

sample = new RailFence("WEAREDISCOVEREDFLEEATONCE");
sample.encode();

//Only works for 3 rails