function start(){
	res=setInterval(function(){
		var date=new Date()
		var time=date.toLocaleTimeString()
		let a=document.getElementById("time")
		a.innerHTML=time
		},1000)
	
}

function end(){
	clearInterval(res)
}


function delay(){
	del=setTimeout(function(){
		alert("hi am  Delay")
	},2000)
	
}

function delaystop(){
	clearInterval(del)
	alert(" hi am  Delaystop")
	
}



