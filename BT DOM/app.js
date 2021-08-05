
// BÀI 1
const button = document.getElementsByClassName("button-an")[0];


button.onclick=function(){
    const khoi = document.getElementById("khoi");

    if(!khoi){
        let div = document.createElement("div");
        div.textContent ="CLICK ĐỂ ẨN HIỆN KHỐI"
        div.id = "khoi"
        let h1 = document.getElementById("an-khoi");
        h1.appendChild(div);
    }
    else if(khoi){
        const khoi2 = document.getElementById("khoi");
        khoi2.remove();
    }
}


// BÀI 2
const button_doi = document.getElementById("button-doi");
button_doi.onclick=function(){

    const random_color = ['red','blue','pink','green','yellow','black','gold'];

    const khoimau = document.getElementById("khoi-mau");
    
    const so_random = Math.floor(Math.random() * 8);

    khoimau.style.backgroundColor = random_color[so_random];
    
}


