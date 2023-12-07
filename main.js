let Main=confirm("Mau Main Tebak angka? ");
while(Main==true){
   let tebakan=Math.floor(Math.random()*10+1);
    
    let input=prompt("Masukan angka tebakan anda! ");

    if(tebakan==input){
        alert("Benar");
        Main=confirm("Mau lanjut? ");
    }else if(tebakan<input){
        alert("Tebakanmu terlalu rendah")
        Main=confirm("Mau lanjut? ");
    }else if(tebakan>input){
        alert("Tebakanmu terlalu Besar")
        Main=confirm("Mau lanjut? ");
    }else{
        Main=false
        alert("Mau lanjut? ")
    }
    console.log(tebakan);
}
while(input!=tebakan&&Main==true){
    input=parseInt(prompt("Masukan angka tebakan anda !! "));

    if(tebakan==input){
        alert("Benar");
        Main=confirm("Mau lanjut? ");
    }else if(tebakan<input){
        alert("Tebakanmu terlalu rendah")  
        Main=confirm("Mau lanjut? ");
    }else if(tebakan>input){
        alert("Tebakanmu terlalu Besar")
        Main=confirm("Mau lanjut? ");
    }else{
        Main=false
    }
    console.log(tebakan);
}
