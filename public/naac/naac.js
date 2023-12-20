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

// function change_tab(id) {
//   document.getElementById("page_content").innerHTML = document.getElementById(id + "_desc").innerHTML;
//   document.getElementById("page1").className = "notselected";
//   document.getElementById("page2").className = "notselected";
//   document.getElementById("page3").className = "notselected";
//   document.getElementById(id).className = "selected";
// }



const handleButtonclick = (button) => {
    const id = button.getAttrinute('data-id');
    console.log(id);
}

// const updateUrlByData = (criteriaId, subCriteriaId)=>{

//     const getUrlOrigin = window.location.href;
//     console.log(getUrlOrigin);

//     const sanitizedCriteriaId = criteriaId.replace(/\s+/g, '_');

//     const updatedUrlOrign = getUrlOrigin + `${sanitizedCriteriaId}/${subCriteriaId}`;
//     console.log(updatedUrlOrign);
//     window.history.pushState({criteriaId, subCriteriaId}, '', updatedUrlOrign); 
// }

const updateUrlByData = (criteriaId, subCriteriaId) => {
    const getUrlOrigin = window.location.href;
    const sanitizedCriteriaId = criteriaId.replace(/\s+/g, '_');
    const currentUrl = window.location.href;

    // Check if the URL already contains both criteria and sub-criteria
    const criteriaInUrl = currentUrl.includes(`/${sanitizedCriteriaId}/${subCriteriaId}`);

    // Update the URL only if both criteria and sub-criteria are not already present
    if (!criteriaInUrl) {
        // Add a forward slash between criteria and sub-criteria
        const updatedUrl = `${getUrlOrigin}${sanitizedCriteriaId}/${subCriteriaId}`;

        // Use an empty string as the title in pushState
        window.history.pushState({ criteriaId: sanitizedCriteriaId, subCriteriaId }, '', updatedUrl);

        // Call a function to render data based on the new URL
        renderData(sanitizedCriteriaId, subCriteriaId);
    }
};

// Assume you have a function to render data based on the URL
const renderData = (criteriaId, subCriteriaId) => {
    console.log(`Rendering data for ${criteriaId}/${subCriteriaId}`);
    const filterData = applyFilter(data, criteriaId, subCriteriaId)
    displayResults(filterData)
};


const showBtn = document.querySelectorAll('.showBtn');

showBtn.forEach(button => {
    // button.addEventListener('click', function(){
    //     const btnID = button.getAttribute('data-id')
    //     console.log(btnID);
    //     fetchData()
    // })

    button.addEventListener('click', () => {

        const criteriaId = button.getAttribute('data-criteria-id');
        const subCriteriaId = button.getAttribute('data-subcriteria-id');


        // update url by on click of button id data-criteria-id and data-subcriteria-id

        // updateUrlByData(criteriaId, subCriteriaId);


        fetch('https://itmuniversity.org/naac/data.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const filterData = applyFilter(data, criteriaId, subCriteriaId)
                updateUrlByData(criteriaId, subCriteriaId);
                // console.log(filterData);
                displayResults(filterData)
            })
            .catch(error => console.error('Error fetching data:', error));
    })
})


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
                      <img class="h-12 w-9" src="https://itmuniversity.org/naac/assets/icon/pdf-icon.png" alt="" />
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
