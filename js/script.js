// var a = window.document.querySelector('textarea#message');
// a.style.background = 'lightblue';

function calc_total(){
    var qty = parseInt(document.getElementById('idQty').value);
    total = qty * 300;
    document.getElementById('idTotalPrice').value = total.toFixed(2);
}


// document.getElementById("idPassword").addEventListener("invalid", myFunction);
// function myFunction() {
//   alert("Must contain 8 characters");
// }




// function message_suc() {
//     var x = alert("Form was sent sucessful!");
    // document.getElementById("idAlert").innerHTML=x;
// }

// function validate() {
//     var name = document.forms["myform"]["name"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR FIRST NAME!");
//         return false;
//     }
//     var name = document.forms["myform"]["lName"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR LAST NAME!");
//         return false;
//     }
//     var name = document.forms["myform"]["_replyto"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR EMAIL!");
//         return false;
//     }
//     var name = document.forms["myform"]["numberAd"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR NUMBER ADDRESS!");
//         return false;
//     }
//     var name = document.forms["myform"]["street"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR STREET ADDRESS!");
//         return false;
//     }
//     var name = document.forms["myform"]["city"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR CITY ADDRESS!");
//         return false;
//     }
//     var name = document.forms["myform"]["idProv"].value;
//     if (name == null || name == "") {
//         alert("PLEASE ENTER YOUR PROVINCE ADDRESS!");
//         return false;
//     }
// }


/* Function onfocus  */


// Enter your name: <input type="text" onfocus="myFunction(this)">

// <p>When the input field gets focus, a function is triggered which changes the background-color.</p>

// <script>
// function myFunction(x) {
//   x.style.background = "yellow";
// }
// </script>



// <p>This example demonstrates how to assign an "onfocus" event to an input element.</p>

// Enter your name: <input type="text" id="fname" onfocus="myFunction()">

// <script>
// function myFunction() {
//   document.getElementById("fname").style.backgroundColor = "red";
// }
// </script>