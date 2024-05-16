//selecting elements
var vname = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.getElementsByName("gender");
var email = document.getElementById("email");
var course = document.getElementById("course");
var btnsave = document.getElementById("btnsave");
var output = document.querySelector(".output");

btnsave.addEventListener("click", function () {
  console.log(); // Use value property for input elements
  console.log(age.value); // Use value property for input elements
  //console.log(gender.value); // If gender is a non-input element, textContent is fine
  console.log(email.value); // Use value property for input elements
  console.log(course.value);

  //creating element

  var tr = document.createElement("tr");
  var tdname = document.createElement("td");
  var tdage = document.createElement("td");
  var tdgender = document.createElement("td");
  var tdcourse = document.createElement("td");
  var tdmail = document.createElement("td");
  var tdaction = document.createElement("td");
  tdaction.innerHTML =
    "<button id='btndel' onclick=" + "btndel(event)" + ">Delete</button>";
  for (let i = 0; i < gender.length; i++) {
    const element = gender[i];
    if (element.checked) {
      tdgender.textContent = element.value;
      /*  console.log(element.target); */
    }
  }

  /*  for (count = 0; count > 2; count++) {
    gender[count].addEventListener("click", function (event) {
      tdgender.textContent = event.target.value;
      console.log(event.target.value);
    });
  } */

  output.append(tr);
  tr.append(tdname);
  tr.append(tdage);
  tr.append(tdgender);
  tr.append(tdcourse);
  tr.append(tdmail);
  tr.append(tdaction);

  //adding values
  tdname.textContent = vname.value;
  tdage.textContent = age.value;

  /*  gender[0].addEventListener("click", function () {
    tdgender.textContent = event.target.value;
  });
  gender[1].addEventListener("click", function () {
    tdgender.textContent = gender[1].value;
  }); */

  /* we can even simplify using for loop */

  tdcourse.textContent = course.value;
  tdmail.textContent = email.value;
});
function btndel(event) {
  event.target.closest("tr").remove();
  /*  console.log(event.target); */
}
