 // Function to include HTML files dynamically
 function includeHTML(file, elementId) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhr.open("GET", file, true);
    xhr.send();
}

// Include header
includeHTML("header.html", "header-container");

// Include navigation
includeHTML("nav.html", "nav-container");