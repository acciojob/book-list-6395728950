//your JS code here. If required.
document.getElementById("submit").addEventListener("click",function(){
	const t1 = document.getElementById("title").value.trim();
	const a1 = document.getElementById("author").value.trim();
	const i1 = document.getElementById("isbn").value.trim();
	if(t1==="" || a1==="" || i1===""){
		alert("please fill all the details");
		return ;
	}

	const tablebody = document.getElementsByClassName("table tbody")[0];
	const newRow = tablebody.insertRow();
	tablebody.appendChild(newRow);
	 
	let first=newRow.insertCell(0);
	let second=newRow.insertCell(1);
	let last=newRow.insertCell(2);
	first.textContent = t1;
	second.textContent = a1;
	last.textContent = i1;
 

 
	
});