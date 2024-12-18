function myFunction() {
  document.getElementById("demo").innerHTML = "Ray Mart";
}

function myFunction2() {
  const element = document.getElementsByTagName("c");

  document.getElementById("demo").innerHTML = 'Its ' + element[0].innerHTML;

}