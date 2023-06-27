function filterdata(id){
    if(id==1){
      $(".code").css("display","none");
      $(".it").css("display","block");
    }
    if (id==3){
      $(".code").css("display","block");
      $(".it").css("display","block");
    }
    if(id==2){
      $(".code").css("display","block");
      $(".it").css("display","none");
    }
    if(id==4){
      $(".code").css("display","block");
      $(".it").css("display","none");
    }
    if(id==5){
      $(".code").css("display","none");
      $(".it").css("display","block");
    }
  }




  function bigImg(x) {
  x.style.height = "200%";
  x.style.width = "200px";
  x.t
}

function normalImg(x) {
  x.style.height = "100%";
  x.style.width = "70px";
}



function fun() {
  alert("welcome to my website");
}




function handleCheckboxChange(checkboxNumber) {
  var checkboxes = document.getElementsByName('cb');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.value == checkboxNumber) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}