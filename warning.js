export const myAlert = (message,duration) => {
    document.querySelector(".alert").innerHTML +=`
    <h3 class="myalert" style="position: fixed;
      z-index: 5;
      top: 15px;
      right: 50px;
      background-color: red;
      color: white;
      width: max-content;
      display: block;
      padding: 5px;" >
  ${message}
  </h3>
    `
    setTimeout(() => {
      document.querySelector('.myalert').style.display = "none";
      document.querySelector('.myalert').remove()
      console.log("my alert");
    }, duration);
  
  
  }