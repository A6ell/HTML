// Get the necessary elements from the DOM
const CourseInput = document.getElementById('Course');
const DurationInput = document.getElementById('Duration');
const priceInput = document.getElementById('price');
const tableBody = document.getElementById('table-body');

// Array to store the course data
const Data = [];

// Function to add a course to the table
function addData() {
  const Course = CourseInput.value.trim();
  const Duration = DurationInput.value.trim();
  const CoursePrice = priceInput.value.trim();

  if (Course !== '' && Duration !== '' && CoursePrice !== '') {
    Data.push({ name: Course, year: Duration, price: CoursePrice });

    // Create a new table row
    const newRow = document.createElement('tr');

    // Create the cells for the row
    const indexCell = document.createElement('td');
    indexCell.textContent = Data.length;
    newRow.appendChild(indexCell);

    const CourseNameCell = document.createElement('td');
    CourseNameCell.textContent = Course;
    newRow.appendChild(CourseNameCell);

    const CourseDurationCell = document.createElement('td');
    CourseDurationCell.textContent = Duration;
    newRow.appendChild(CourseDurationCell);

    const CoursePriceCell = document.createElement('td');
    CoursePriceCell.textContent = CoursePrice;
    newRow.appendChild(CoursePriceCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the input fields
    CourseInput.value = '';
    DurationInput.value = '';
    priceInput.value = '';
  }
}

// Add event listener to the "Add Course" button
const addButton = document.querySelector('button');
addButton.addEventListener('click', addData);
