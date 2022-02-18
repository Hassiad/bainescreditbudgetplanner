function compute() {
  var principal = document.getElementById("principal").value;

  // if(principal == "" || principal <= 0)
  // {
  //     alert("Enter a positive number");
  //     document.getElementById("principal").focus();
  //     return;
  // }

  var rate = 14;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var Installment = (principal * rate) / 100;

  var amount = principal * Math.pow(1 + rate / 100, years);
  var ci = amount - principal;
  ci = ci.toFixed(2);

  var total = parseFloat(principal) + parseFloat(ci);
  total = total.toFixed(2);

  var monthly_install = total / years;

  var dateNow = new Date();
  var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

  // let amounts = document.getElementById("amount").value;
  const amounts = (document.getElementById("amounts").innerHTML =
    monthly_install);
  let interest_rates = document.getElementById("interest_rate");
  interest_rates.innerHTML = `${rate}%`;
  let monthes = document.getElementById("months");
  monthes.innerHTML = ci;
  const interests = (document.getElementById("payments").innerHTML = total);

  //var resultDisplay = document.getElementById("result");
  //document.querySelector('ci').innerHTML = "Monthly Installment" + "<br><span class='highlight'>" + monthly_install + "</span>."  + ", <br>Interest rate"+ "<br><span class='highlight'>" + rate + "</span>%." + "<br> Total Interest Paid " + "<br><span class='highlight'>" + ci + "</span>" + ", <br> Total Repayment " + "<br><span class='highlight'>" + total + "</span>";
  // var resultDisplay = document.getElementById("result");
  // resultDisplay.innerHTML =
  //   "Monthly Installment" +
  //   "<br><span class='highlight'>" +
  //   monthly_install +
  //   "</span>." +
  //   ", <br>Interest rate" +
  //   "<br><span class='highlight'>" +
  //   rate +
  //   "</span>%." +
  //   "<br> Total Interest Paid " +
  //   "<br><span class='highlight'>" +
  //   ci +
  //   "</span>" +
  //   ", <br> Total Repayment " +
  //   "<br><span class='highlight'>" +
  //   total +
  //   "</span>";
}

function SliderValue() {
  var slider = document.getElementById("principal");
  var output = document.getElementById("slide_display");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
}

function newSliderValue() {
  var slider = document.getElementById("slide2");
  var output = document.getElementById("slide_display2");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
}
