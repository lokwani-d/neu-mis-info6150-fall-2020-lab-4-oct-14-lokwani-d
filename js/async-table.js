const contentsPath = "data/personalbar.json";


const populate = (contents, parent) => {
  const personContainer = document.getElementById("person-container");
  const personTable = document.createElement("table");
    let row, col;

  contents.forEach(person => {
    
    row = document.createElement('tr');
    col = document.createElement('td');
    col.innerHTML = person.firstname;
    row.appendChild(col);
    col = document.createElement('td');
    row.appendChild(col);

    personTable.appendChild(row);

  });
  personContainer.appendChild(personTable);
};

const loadButton =  document.getElementById('person-load');
loadButton.addEventListener('click', () =>{
    const xhr =  new XMLHttpRequest();
    xhr.open('GET' , contentsPath);

    xhr.addEventListener('load', () => {
    const contents = JSON.parse(evt.target.responseText);
    populate(contents);
}) ;
xhr.send();
});
