function addrows(){
    var x = document.getElementById('fname').value;
    var y = document.getElementById('email').value;
    var z = document.getElementById('msgbox').value;
    var c1 = document.getElementById("colorbox1")
    var c2 = document.getElementById("colorbox2")
    var c3 = document.getElementById("colorbox3")
    col = []
    if (x==""){
        alert("Name must be filled")
    }
    else{
        if (y==""){
            alert("email must be filled")
        }
        else{
            if (z==""){
                alert("content must be filled")
            }
        }
    }
    if (c1.checked == true){
        col.push(c1.value)
    }
    if (c2.checked == true){
        col.push(c2.value)
    }
    if (c3.checked == true){
        col.push(c3.value)
    }

    var NewRow = results.insertRow(-1); 
    var Newcell1 = NewRow.insertCell(0); 
    var Newcell2 = NewRow.insertCell(1); 
    var Newcell3 = NewRow.insertCell(2); 
    var Newcell4 = NewRow.insertCell(3)
    Newcell1.innerHTML = x;
    Newcell2.innerHTML = y;
    Newcell3.innerHTML = z;
    Newcell4.innerHTML = col;

}