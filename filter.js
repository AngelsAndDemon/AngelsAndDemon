filterSelection("all")
function filterSelection(c) {
    count = 0
    if (c == "all") {

        document.getElementById("horn").value = "c1";
        document.getElementById("hornColor").value = "c2";
        document.getElementById("hairColor").value = "c3";
        document.getElementById("eyebrowChoice").value = "c4";
        document.getElementById("eyeChoice").value = "c5";
        document.getElementById("eyeColor").value = "c6";
        document.getElementById("mouth").value = "c7";
        document.getElementById("accessoryCount").value = "c8";
        document.getElementById("accessoryType").value = "c9";
        document.getElementById("ringColor").value = "c10";     
        document.getElementById("clothes").value = "c11";
        document.getElementById("clotheColor").value = "c12";
        document.getElementById("clothLogo").value = "c13";
        document.getElementById("bodyColor").value = "c14";
        document.getElementById("wingChoice").value = "c15";
        document.getElementById("wingColor").value = "c16";
        document.getElementById("bkColor").value = "c17";
        x = document.getElementsByClassName("gallery");
        for (i = 0; i < x.length; i++) {
              x[i].style.display = "block"
        }
        
        statArray = ["","","","","","","","","","","","","","","","",""]
        
        var btns = document.getElementById("myBtnContainer")
        btns.style.display = "block"
        
        document.getElementById("statistics").innerHTML = ""
    }else{
        x = document.getElementsByClassName("gallery");
        for (i = 0; i < x.length; i++) {
              x[i].style.display = "block"
        }
        
        for (k = 1; k < 18; k++) {
            if (c == "c" + k){
                c = ""
                statArray[k-1] = ""
            }
        }

        if (c == "ShortHorn/Ring" || c == "LongHorn/Cross" || c == "4xHorns/2Halos"){
            statArray[0] = c
        }else if (c == "DarkGreen/Orange" || c == "DarkSilver" || c == "DarkGold/Gold"){
            statArray[1] = c
        }else if (c == "HRed" || c == "HOrange" || c == "HBlue" || c == "HGreen" || c == "HYellow" || c == "HPurple" || c == "HPink" || c == "HSilver" || c == "HDarkGrey") {
            statArray[3] = c
        }else if (c == "None/Small" || c == "Line" || c == "Thin" || c == "Thick/ThinV2") {
            statArray[4] = c
        }else if (c == "EDemon/Angel" || c == "ENormal" || c == "Cat" || c == "Special1" || c == "Special2") {
            statArray[5] = c
        }else if (c == "ERed" || c == "EOrange" || c == "EBlue" || c == "EGreen" || c == "EYellow" || c == "EPurple" || c == "EPink" || c == "ESilver") {
            statArray[6] = c
        }else if (c == "MNormal" || c == "MOpen" || c == "Tongue" || c == "Clench" || c == "Smoke") {
            statArray[7] = c
        }else if (c == "0" || c == "1" || c == "2" || c == "3") {
            statArray[8] = c
        }else if (c == "Ring" || c == "Dots" || c == "Demon/Angel"){
            statArray[9] = c
        }else if (c == "RingGold" || c == "RingSilver") {
            statArray[10] = c
        }else if (c == "None/Shirt" || c == "LongSleeve" || c == "DressShirt" || c == "Suit/Dress") {
            statArray[11] = c       
        }else if (c == "CWhite" || c == "CDarkGrey" || c == "CYellow" || c == "CPurple") {
            statArray[12] = c     
        }else if (c == "Algo" || c == "Yieldly" || c == "A&D" || c == "666/Cross" || c == "Slime"){
            statArray[13] = c    
        }else if (c == "BRed" || c == "BOrange" || c == "BBlue" || c == "BGreen" ||c == "BYellow" || c == "BPurple" || c == "BPink" || c == "BSilver" || c == "BDarkGrey") { 
            statArray[14] = c    
        }else if (c == "WClosed" || c == "WOpen") {
            statArray[15] = c     
        }else if (c == "Wred" || c == "Wyellow" || c == "Wwhite" || c == "Wblack") {
            statArray[16] = c  
        }else if (c == "BKYellow" || c == "BKGrey" || c == "BKBlue" || c == "BKPurple" || c == "BKRed") {
            statArray[17] = c  
        }
        console.log(statArray)
        
        for (i = 0; i < x.length; i++) {
            for (j = 0; j < statArray.length; j++) {
                if (x[i].className.indexOf(statArray[j]) > -1) {
                    
                }else{
                    x[i].style.display = "none"
                }
            }
        }
        count = 0
        for (q = 0; q < x.length; q++) {
            if (x[q].style.display == "block"){
                count++
            }
        }

        document.getElementById("statistics").innerHTML = (count + "/"+ x.length + " (" +(count/x.length*100).toFixed(2) + "%) of Demon and Angels have the filtered traits or  " + count/2 + "/" + x.length/2 + " (" +(count/x.length/2*100).toFixed(2) + "%) pairs have the filtered traits. ");

        
    }
}

    