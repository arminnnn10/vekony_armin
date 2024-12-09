const btn= document.createElement('button');

btn.onclick = function()
{
    alert("ez egy natív kód");
}

btn.innerHTML = "natív gomb";

document.getElementById("nativ-button-container").appendChild(btn);