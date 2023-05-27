const sub= document.getElementById("submit");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(name));
    const div = document.getElementById("box");
    div.appendChild(p);
})