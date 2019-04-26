"use strict";
let iad = document.querySelector(".ad");
let isoyad = document.querySelector(".soyad");
let imovqe = document.querySelector(".select");
let yarat = document.querySelector("button");
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let gol=document.querySelector(".gol-sayi");
let yas=document.querySelector(".yas");
let tranferCount=0;
let i=0;
let i2=0;
function yoxlama1(qiymet){
   
    let a=+qiymet[qiymet.length-1];
    
    if(a){
     iad.value="";
       i=0;
       alert("Ad-a reqem daxil etmeyin") }
       i=qiymet.length-1;
       };
 function yoxlama2(qiymet){
   
        let a=+qiymet[qiymet.length-1];
        
        if(a){
          isoyad.value="";
           i2=0;
           alert("Soyad-a reqem daxil etmeyin") }
           i2=qiymet.length-1;
           };

iad.onkeyup=function(){yoxlama1(iad.value);}
isoyad.onkeyup=function(){yoxlama2(isoyad.value);}


    


class Futbolcu {
    constructor(no, ad, soyad, movqe ,golSayi,yasi) {
        this.no = no;
        this.ad = ad;
        this.soyad = soyad;
        this.movqe = movqe;
        this.golSayi=golSayi;
        this.yasi=yasi;
        
        
    }

}

let no;



yarat.onclick = function () {

    if(tbody.lastElementChild==null)
    {
       no=0; 
    }
    else{
        no=+(tbody.lastElementChild.firstElementChild.innerText);
    }
    if(yas.value<15||yas.value>50){
        alert("Futbolcunun yasi 15-50 yas ola biler.Zehmet olmasa yasi sertlere uygun qeyd edin")
    };
    if(gol.value<0){
        alert("Futbolcunun vurgu golu duzgun daxil edin");
    }
    if(iad.value.trim()&&iad.value.trim()&&isoyad.value.trim()&&imovqe.value.trim()!=0&&yas.value>15&&yas.value<50&&gol.value>=0){
    
    let futbolcu = new Futbolcu((no + 1), iad.value.trim(), isoyad.value.trim(), imovqe.value.trim(),gol.value,yas.value);
    let tr = document.createElement("tr");


    

    for (const info in futbolcu) {

        let td = document.createElement("td");
        td.innerText = futbolcu[info];
        tr.appendChild(td);

        iad.value = "";
        isoyad.value = "";
               
         imovqe.firstElementChild.select="true";
        imovqe.value ='0' ;

    }
    //burdan
    if(yas.value>30){
        tranferCount=tranferCount+1;
    }
    else if(yas.value>25){
        tranferCount=tranferCount+4;
    }
    else if(yas.value>20){
        tranferCount=tranferCount+7;
    }
    else{ 
       tranferCount=tranferCount+10;
       
    }

    
    if(gol.value>50){
        tranferCount=tranferCount+30;
    }
    else if(gol.value>35){
        tranferCount=tranferCount+20;
    }
    else if(gol.value>25){
        tranferCount=tranferCount+12;
    }
    else if(gol.value>15){
        tranferCount=tranferCount+8;
    }
    else if(gol.value>8){
        tranferCount=tranferCount+3;
    }
    else{
        tranferCount=tranferCount+1;
    }
    let td=document.createElement("td");
    console.log(tranferCount);
    console.log((+gol.value)+(+yas.value));
    td.innerText=(tranferCount*5)+" Mln+";
    gol.value="";
    yas.value="";
   
    tr.appendChild(td);

    //bura
    
    
    tbody.appendChild(tr);
    table.classList.remove("d-none");
     }
     tranferCount=0;
     
    
    

}


