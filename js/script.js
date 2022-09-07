// const appointmentForm = document.getElementById("appointment-form");

// appointmentForm.addEventListener("submit", function (e) {
//     e.preventDefault(); 

//     const url = e.target.action;
//     const formData = new FormData(appointmentForm);

//     fetch(url, {
//         method: "POST",
//         body: formData,
//         mode: "no-cors",
//     })
//     .then(() => {
//         // url thank u
//         window.location.href="/web/thankyou.html"
//     })
//     .catch((e) => alert("Terjadi Kesalahan"));
// });