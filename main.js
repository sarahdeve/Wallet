
    // var form = document.getElementsByClassName("my-form");
    // var form = document.getElementById('my-form');
    // async function handleSubmit(event) {
    //   event.preventDefault();
    //   var status = document.getElementById("statux");
    //   var data = new FormData(event.target);
    //   fetch(event.target.action, {
    //     method: form.method,
    //     body: data,
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    //   }).then(response => {
    //     status.innerHTML = "Thanks for your submission!";
    //     form.reset()
    //   }).catch(error => {
    //     status.innerHTML = "Oops! There was a problem submitting your form"
    //   });
    // }
    // form.addEventListener("submit", handleSubmit)



// window.addEventListener("load", function () {
//   function sendData() {
//     const XHR = new XMLHttpRequest();
//     const FD = new FormData(form);

//     XHR.addEventListener("load", function(event) {
//       alert(event.target.resposeText);
//     });
//     XHR.open('POST', "https://formspree.io/f/mayvwylb");

//     XHR.send(FD);
//   }
//   const form = document.getElementById("my-form");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     sendData();
//   });
// });






    // window.addEventListener(
    //   "DOMContentLoaded", function() {
    //       var form = document.getElementsById("my-form");
    //       // var button = document.getElementById(button);
    //       var status = document.getElementById("status");

    //       function success() {
    //       form.reset();
    //       status.classList.add('success');
    //       status.innerHTML = "Thanks!";
    //       }

    //       function error() {
    //       status.classList.add('success');
    //       status.innerHTML = "Ooops! There was a problem.";
    //       }

    //       form.addEventListener("submit", function(e){
    //       e.preventDefault();
    //       var data = new FormData(form);
    //       ajax(form.method, form.action, data, success, error);
    //       });
    //   }
    //   );

    //   function ajax(method, url, data, success, error) {
    //   var xhr = new XMLHttpRequest();
    //       xhr.open(method, url);
    //       xhr.setRequestHeader("Accept", "application/json");
    //       xhr.onreadystatechange = function() {
    //           if(xhr.readyState !== XMLHttpRequest.DONE) return;
    //           if(xhr.status === 200) {
    //           success(xhr.response, xhr.responseType);
    //           } else {
    //           error(xhr.status, xhr.response, xhr.responseType);
    //           }
    //       };
    //       xhr.send(data);
    //   };