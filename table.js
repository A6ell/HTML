function createTableFromObjects(data) {
    
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    
    // Create table header row
    const keys = Object.keys(data[0]);
    let head = ['id', 'car name']
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
        dataCell.textContent = obj;
        dataRow.appendChild(dataCell);
      }
      table.appendChild(dataRow);
    }
  
    return table;
  }
  const dataArray = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 28 },
  { id: 3, name: 'Doe', age: 45 },
];

const table = createTableFromObjects(dataArray);
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table);