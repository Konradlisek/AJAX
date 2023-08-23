const button = document.querySelector("button");

const userData = () => {
    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`)
    .then((res)=> res.json())
    .then((data)=>{
        const newDiv = document.createElement('div');
        
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Imię: ${data.imie}`;
        
        const lastNameParagraph = document.createElement('p');
        lastNameParagraph.textContent = `Nazwisko: ${data.nazwisko}`;
        
        const professionParagraph = document.createElement('p');
        professionParagraph.textContent = `Zawód: ${data.zawod}`;
        
        newDiv.appendChild(nameParagraph);
        newDiv.appendChild(lastNameParagraph);
        newDiv.appendChild(professionParagraph);
        
        document.body.appendChild(newDiv);
    })
    .catch((error) => {
        console.error("Wystąpił błąd:", error);
    });
};

button.addEventListener("click", userData);