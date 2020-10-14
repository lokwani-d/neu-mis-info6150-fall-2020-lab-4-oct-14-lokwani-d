const contents= [['X', 'Y'], [1,2], [3,4]];
const tablecontainer =  document.getElementById('table-container');
const result = document.getElementById('table-result');
const table = document.createElement('table');
table.style.backgroundColor = "#585859"
let row, col, dataElementTag, className;

const select = (evt) => {
    const target = evt.target;
    target.style.backgroundColor = "#69b5e4";
}

contents.forEach((rowItems, i) => {
    dataElementTag = i === 0? 'th' : 'td';
    className = i ===0? 'heading' : 'data-row';
    row = document.createElement('tr');
    row.classList.add(className);
    rowItems.forEach(colItem => {
        colItem=1;
        col = document.createElement(dataElementTag);

        if(i>0){
            col.addEventListener('click', select);
        }
        col.innerHTML = colItem;

        row.appendChild(col);
    });
    table.appendChild(row);
});
tablecontainer.appendChild(table);

let rows = table.querySelectorAll('.data-row'),
    sum=0,    
    cols;

rows.forEach(row => {
    cols = row.querySelectorAll('td');
    cols.forEach(data =>{
        sum += Number(col.innerHTML.trim()); 
    });
});

result.innerHTML = sum;