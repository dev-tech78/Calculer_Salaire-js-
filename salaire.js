

function Calculer(){
   // let femme  = "femme";
 
  
    let sexe = document.getElementById("qt2")
    let salaire = document.getElementById("qta")
    let cadeaux = document.getElementById("qt3")
    let alocation = document.getElementById("qt4")
    let anciennete = document.getElementById("qt1")

    if(sexe.value == "femme"){
        document.bdc.ht2.value =   salaire.value /100* 2;
    }else{
        document.bdc.ht2.value =  0;
    }

    if(cadeaux.value == 1){
        document.bdc.ht3.value =   + parseFloat(document.bdc.pu3.value);
    }else{
        document.bdc.ht3.value =  0;
    }

    if(alocation.value >= 3){
        document.bdc.ht4.value =    + parseFloat(document.bdc.pu4.value);
    }else{
        document.bdc.ht4.value =  0;
    }
    if(anciennete.value >= 5){
    document.bdc.ht1.value = salaire.value /100 *  10;
} else  {document.bdc.ht1.value =  0;}
   
    //document.bdc.ht3.value = parseFloat(document.getElementById("qt3").value) + parseFloat(document.bdc.pu3.value);
    //document.bdc.ht4.value = parseFloat(document.getElementById("qt4").value) + parseFloat(document.bdc.pu4.value);
    document.bdc.ht5.value = document.getElementById("qta").value /100 * 18 ;
    document.bdc.ht6.value = document.getElementById("qta").value /100 * 7 ;
    document.bdc.ht7.value = document.getElementById("qta").value /100 * 5 ;
    document.bdc.hta.value = parseFloat(document.bdc.ht2.value) + parseFloat( document.bdc.ht3.value)
                            + parseFloat(document.bdc.ht4.value)
                            + parseFloat(document.bdc.ht1.value)
                            + parseFloat(document.bdc.qta.value)
                            -parseFloat(bdc.ht5.value)
                            -parseFloat(bdc.ht6.value)
                            -parseFloat(bdc.ht7.value)
    document.bdc.ttc.value =   document.bdc.hta.value                       

    
    // document.bdc.tht.value = parseFloat(document.bdc.ht1.value)+
    //                          parseFloat(document.bdc.ht2.value)+
    //                          parseFloat(document.bdc.ht3.value);
    //  document.bdc.tva.value = parseFloat(document.bdc.tht.value)  /100 * 20 
    //  document.bdc.ttc.value = parseFloat(bdc.tva.value) + parseFloat(document.bdc.tht.value)
    
    }
