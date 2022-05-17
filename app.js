let names;
let coutry;
let p = document.getElementById("output")
let nameChange = document.getElementById("nameChange");
let coutryChange = document.getElementById("coutryChange");

nameChange.addEventListener("change", function(){
    names = event.target.value;
    changeInput();
}
)
coutryChange.addEventListener("change", function(){
    coutry = event.target.value;
    changeInput();
}
)
const changeInput = function() {
    const text = `Je heet ${names} en je komt uit ${coutry}`;
    p.textContent = text;
}

