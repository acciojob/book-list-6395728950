//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function(){
	const t1 = document.getElementById("title").value.trim();
	const a1 = document.getElementById("author").value.trim();
	const i1 = document.getElementById("isbn").value.trim();
	if(t1==="" || a1==="" || i1===""){
		alert("please fill all the details");
		return ;
	}

	const tablebody = document.querySelector("table tbody");
	cosnt newrow = document.createElement(tr);
	const first  = document.createElement(td);
	const second  = document.createElement(td);
	const last  = document.createElement(td);
	first.textContent = t1;
	second.textContent = a1;
	last.textContent = i1;
	newrow.appendChild(first);
	newrow.appendChild(second);
	newrow.appendChild(last);

	tablebody.appendChild(newrow);
	// t1.textContent.value="";
	// a1.textContent.value="";
	// i1.textContent.value="";
	
});