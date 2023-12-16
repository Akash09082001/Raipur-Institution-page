// menu open and close
const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

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

    fetch('https://itmuniversity.org/naac/data.json') // Update the path to your JSON file
        .then(response => response.json())
        .then(data => {
            const filterData = applyFilter(data, criteriaId, subCriteriaId);
            updateUrlByData(criteriaId, subCriteriaId);
            displayResults(filterData);
        })
        .catch(error => console.error('Error fetching data:', error));
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
}

const updateUrlByData = (criteriaId, subCriteriaId) => {
    const sanitizedCriteriaId = criteriaId.replace(/\s+/g, '_');

    // Extract the current path
    let currentPath = window.location.pathname;

    // Remove existing criteria and sub-criteria if present
    currentPath = currentPath.replace(new RegExp(`/${sanitizedCriteriaId}/[^/]+`), '');

    // Adjust the updated path based on whether the current path already ends with a slash
    const separator = currentPath.endsWith('/') ? '' : '/';
    const updatedPath = `${currentPath}${separator}${sanitizedCriteriaId}/${subCriteriaId}`;

    // Use an empty string as the title in pushState
    window.history.pushState({ criteriaId: sanitizedCriteriaId, subCriteriaId }, '', updatedPath);
};







const resultContainer = document.getElementById("dataContainer")

function displayResults(filteredData) {
    // Assuming you want to display data in a list
    const resultList = document.createElement('ul');
    resultList.setAttribute('class', 'grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-3')

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
