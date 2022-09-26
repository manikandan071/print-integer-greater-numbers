
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");
let arr=[];

btn.addEventListener("click",function(){
	var given=randomnum.value;
	var add=document.getElementById("addval");
	var x=document.createElement("span");
	add.appendChild(x);
	
	for(var j=1; j<=tot; j++){
	if(!(j%10==0)){
		if(j<=99){
			var rem=j%10;
			var num=Math.floor(j/10);
			if((num <= rem)||(num == 0)){
				arr.push(j);
			}
		}
	}
	x.innerText="["+ arr +"]";
}
})

let tot=100;

for(var j=1; j<=tot; j++){
	if(!(j%10==0)){
		if(j<=99){
			var rem=j%10;
			var num=Math.floor(j/10);
			if((num <= rem)||(num == 0)){
				console.log(j);
			}
		}
	}
}
