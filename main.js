$.getJSON("data.json",function (json) {
	var list=json;
	var table=document.getElementById("table");
	console.log(list);
	var showlist=["name","source","flags","replace"];
	for(var i=0;i<list.length;i++){
		var tr=document.createElement("tr");
		for(var j=0;j<4;j++){
			var td=document.createElement("td");
			td.innerText=list[i][showlist[j]];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
})