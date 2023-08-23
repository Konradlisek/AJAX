console.log("Warsztat - Infinite Scroll");
let preloader = document.getElementById("preloader");
let preloading = false;

const showPreloader = () => {
  preloader.style.display = "block";
  preloading = true;
};

const hidenPreloader = () => {
  preloader.style.display = "none";
  preloading = false;
};
const getData = () => {
  if (!preloading) {
    showPreloader();
    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((res) => res.json())
      .then((data) => {
        let body = document.body;
        preloading = false;
        let hr = document.createElement("hr");
        body.appendChild(hr);
        for (let user of data) {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWebsite = document.createElement("p"); //

          pId.innerText = `User ID: ${user.id}`;
          pName.innerText = `User Name: ${user.name}`;
          pWebsite.innerHTML = `User URL: ${user.website}<br>-----`;

          let body = document.body;
          body.appendChild(pId);
          body.appendChild(pName);
          body.appendChild(pWebsite);
        }

        hidenPreloader();
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

const scrollToEndOfPage = () => {
  let d = document.documentElement;
  let scrollHeight = d.scrollHeight;
  let scrollTop = d.scrollTop; //
  let clientHeight = d.clientHeight;
  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  if (sumScrollTopClientHeight >= scrollHeight) {
    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
