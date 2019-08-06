//^(\s)*$\n  ...removes empty spaes in code
function validate() {
  var name = document.getElementById("nm").value;
  var email = document.getElementById("em").value;
  var contact = /^[7-9]{1}[0-9]{9}$/;
  var ema=/^([a-z0-9\-]+)@([a-z0-9]-)+).([a-z]{2,8}?$)/;
  var emai=document.getElementById("em").value;
  var text1 = document.getElementById("con").value;
  var enquiry = document.getElementById("enq").value;
  if (name.trim() == "") {
    // alert("invalid name");
    nm.style.border = "solid 3px red";
    document.getElementById("nm1").style.visibility = "visible";
    return false;
  }
  else if (!emai.test(ema))
  {
    // alert("inavlid email");
    em.style.border = "solid 3px red";
    document.getElementById("em1").style.visibility = "visible";
    return false;
  }
  else if (!contact.test(text1)) {
    //alert("invalid contact");
    con.style.border = "solid 3px red";
    document.getElementById("con1").style.visibility = "visible";
    return false;
  }
  else {
    return true;
  }
}
function RadioSection() {
  var TwoWheelerProduct = document.getElementById("ptwo");
  var TwoWheelerService = document.getElementById("stwo");
  var ThreeWheelerProduct = document.getElementById("pthree");
  var ThreeWheelerService = document.getElementById("sthree");
  var FourWheelerProducts = document.getElementById("pfour");
  var FourWheelerService = document.getElementById("sfour");
  if (TwoWheelerProduct.checked == true) {
    window.open("twwp.html")
  }
  if (TwoWheelerService.checked == true) {
    window.open("twws.html")
  }
  if (ThreeWheelerProduct.checked == true) {
    window.open("thwp.html")
  }
  if (ThreeWheelerService.checked == true) {
    window.open("thws.html")
  }
  if (FourWheelerProducts.checked == true) {
    window.open("fwp.html")
  }
  if (FourWheelerService.checked == true) {
    window.open("fws.html")
  }
}