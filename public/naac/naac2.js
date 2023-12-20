// menu open and close
const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

// Variable to store button information
let storedButtonInfo = null;

// open menu
function openMenu() {
    mobileMenu.style.display = "flex";
    openButton.style.display = "none";
    closeButton.style.display = "block";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
}

const handleButtonClick = (button) => {
    const criteriaId = button.getAttribute('data-criteria-id');
    const subCriteriaId = button.getAttribute('data-subcriteria-id');

    // Fetch data from the server based on criteria and sub-criteria
    fetch(`https://itmuniversity.org/naac/data.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const filterData = applyFilter(data, criteriaId, subCriteriaId);
            updateUrlByData(criteriaId, subCriteriaId);
            displayResults(filterData);
        })
        .catch(error => console.error('Error fetching data:', error.message));
};

const showBtn = document.querySelectorAll('.showBtn');

showBtn.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button);
    });
});

const applyFilter = (data, criteriaId, subCriteriaId) => {
    const criteria = data.find(item => item.id === criteriaId);

    if (criteria) {
        const subCriteria = criteria.data.find(subItem => subItem.id === subCriteriaId);

        if (subCriteria) {
            return subCriteria.data;
        }
    }
    return [];
};

const updateUrlByData = (criteriaId, subCriteriaId) => {
    const sanitizedCriteriaId = criteriaId.replace(/\s+/g, '_');
    // Extract the current path
    let currentPath = window.location.pathname;

    // Remove existing criteria and sub-criteria if present
    currentPath = currentPath.replace(new RegExp(`/${sanitizedCriteriaId}/[^/]+`), '');

    // Adjust the updated path based on whether the current path already ends with a slash
    const separator = currentPath.endsWith('/') ? '' : '/';
    const updatedPath = `${currentPath}${separator}${sanitizedCriteriaId}/${subCriteriaId}`;

    // Store button information in the variable
    storedButtonInfo = { criteriaId: sanitizedCriteriaId, subCriteriaId };

    // Use an empty string as the title in pushState
    window.history.pushState(storedButtonInfo, '', updatedPath);
};

const resultContainer = document.getElementById("dataContainer");

function displayResults(filteredData) {
    // Assuming you want to display data in a list
    const resultList = document.createElement('ul');
    resultList.setAttribute('class', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-3');
    filteredData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <a class="flex h-fit w-72 max-w-xs hover:shadow-md rounded-md" href=${item.url} target="_blank">
          <div class="flex h-28 w-full items-center justify-center gap-4 rounded-md bg-white px-5 py-2">
              <div class="flex w-1/5">
                  <img class="h-12 w-9" src="assets/icon/pdf-icon.png" alt="" />
              </div>
              <div class="flex w-4/5">
                  <h3 class="flex flex-wrap">${item.name}</h3>
              </div>
          </div>
      </a>
  `;
        resultList.appendChild(listItem);
    });

    // Clear previous content and append the new list to the result container
    resultContainer.innerHTML = '';
    resultContainer.appendChild(resultList);
}

// Function to render data based on stored button information
const renderDataFromUrl = () => {
    const { criteriaId, subCriteriaId } = storedButtonInfo || {};

    if (criteriaId && subCriteriaId) {
        // Fetch data based on stored button information
        fetch(`https://itmuniversity.org/naac/data.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const filterData = applyFilter(data, criteriaId, subCriteriaId);
                displayResults(filterData);
                createDynamicPage(criteriaId, subCriteriaId, filterData);
            })
            .catch(error => console.error('Error fetching data:', error.message));
    }
};

const createDynamicPage = (criteriaId, subCriteriaId, data) => {
    // Create a new window for dynamic content
    const newWindow = window.open('', '_blank');

    if (newWindow) {
        try {
            console.log('Creating dynamic page:', criteriaId, subCriteriaId);
            // Generate the HTML content based on the data
            const pageContent = generatePageContent(data);

            // Set the HTML content of the new window
            newWindow.document.write(pageContent);
            console.log('Dynamic page created successfully');
        } catch (error) {
            console.error('Error creating dynamic page:', error.message);
        }
    } else {
        console.error('Failed to open a new window');
    }
};


const generatePageContent = (data) => {
    // Generate the HTML content based on the data
    // Customize this based on your specific needs
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="assets/styles.css">
            <title>Dynamic Page</title>
        </head>
        <body>
            <h1>Dynamic Page Content</h1>
            <!-- Customize the content based on your data -->
            <ul>
                ${data.map(item => `<li>${item.name}</li>`).join('')}
            </ul>
            <script src="../../naac2.js"></script>
        </body>
        </html>
    `;
};

// If the page is accessed directly without using the back/forward buttons,
// or if the back/forward buttons are used, call renderDataFromUrl to handle the initial state
window.addEventListener('popstate', renderDataFromUrl);
renderDataFromUrl();  // Call it immediately on page load

// ... (remaining code remains unchanged)
