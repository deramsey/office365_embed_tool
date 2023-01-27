let l1 = "<iframe src='"
let l2 = "&action=embedview&wdStartOn=1' "
let l3 = " frameborder='0'></iframe>"

function getLink() {
let ele = document.getElementsByName('res'); 
              
  for(i = 0; i < ele.length; i++) { 
     if(ele[i].checked) 
        var res = ele[i].value;
  }
let user_link = document.getElementById("LinkInput").value;
  if(document.querySelector("#gdrive").checked){
    let eq_loc = user_link.lastIndexOf("/");
    document.getElementById("output").innerText = l1 + user_link.slice(0,eq_loc+1) + "preview' " + res + l3;
    navigator.clipboard.writeText(l1 + user_link.slice(0,eq_loc+1) + "preview' " + res + l3);
  }
  else{
document.getElementById("output").innerText = l1 + user_link + l2 + res + l3;
    navigator.clipboard.writeText(l1 + user_link + l2 + res + l3);
  }
}

function clearForm(){
  document.querySelector("#LinkInput").value = "";
  document.querySelector("#output").innerHTML = "";
}

document.querySelector("#clear").addEventListener("click", clearForm);