

function createTableFromObjects(data) {
    
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  
  // Create table header row
  const keys = Object.keys(data[0]);
  let head = ['id', 'car name', 'price', 'car']
  for (const key of head) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  // Create table data rows
  for (const obj of data) {
    const dataRow = document.createElement('tr');
    for (const key of keys) {
      const dataCell = document.createElement('td');
      dataCell.textContent = obj[key];
      dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
  }

  return table;
}

const dataArray = [
  { name: '' },
  
  ];
function addCar(){
 let car = document.getElementById('car').value

 dataArray.push({name: car})
 document.getElementById('car').value = '';
 console.log(dataArray)
 const table = createTableFromObjects(dataArray);
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table);

}


