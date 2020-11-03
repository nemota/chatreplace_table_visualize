document.getElementById("load").onclick = function () {
	document.getElementById("load").disabled=true;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if(xhr.readyState==4){
			if(xhr.status==200){
				show(xhr.responseText);
			}else{
				alert("有効なファイルを指定してね");
			}
		}
	
	}
	xhr.open("GET",document.getElementById("path").value.trim());
	xhr.send(null);
}
function show(res){
	var list=JSON.parse(res);
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
}