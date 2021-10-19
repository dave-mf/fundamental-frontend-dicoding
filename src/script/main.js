function main() {

    // Meal API
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    const getMeal = () => {
        fetch(`${baseUrl}/categories.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.categories);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };

// Get Meal based on Category

    const renderAllBooks = (cat) => {
        const MealList = document.querySelector("#listMeal");

        cat.forEach(categories => {
            MealList.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 29px;">
                    <div class="card">
                    <img src="${categories.strCategoryThumb}" class="card-img-top" alt="Meal Category">
                        <div class="card-body" width="100px" height="20vh">
                            <h5 class="card-title">${categories.strCategory}</h5>
                            <p class="card-text" style="text-overflow:ellipsis; overflow: auto;height:150px;" id="long-text">${categories.strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    };

    getMeal();
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
}

export default main;