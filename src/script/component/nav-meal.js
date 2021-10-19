class NavMeal extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<nav class="navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#">
                            <img id="meal-logo" src="https://i.ibb.co/vZDdVg3/MealCat.png" width="90" alt="Meal Cat">
                            </a>
                        </nav>`;
    }
 }
  
 customElements.define("nav-meal", NavMeal);