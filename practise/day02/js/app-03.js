const renk1=document.querySelector(".red");
const renk2=document.querySelector(".white");
const renk3=document.querySelector(".blue");
const renk4=document.querySelector(".black");
const renk5=document.querySelector(".green");

const yanlisDurum=document.querySelector("#yanlis")

renk1.innerText="KIRMIZI";
renk1.innerText="BEYAZ";
renk1.innerText="MAVI";
renk1.innerText="SİYAH";
renk1.innerText="YESİL";

let yanlisHal=
`<div class="row">
    <div class="red">Siyah</div>
    <div class="white">Kirmizi</div>
    <div class="blue">Yesil</div>
    <div class="black">Mavi</div>
    <div class="green">Beyaz</div>
</div>`;


yanlisDurum.innerHTML = `<h1 style=color:red; text-align:center >YANLIS RENKLER</h1> ${yanlisHal}`;







