class MealList extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<div id="listMeal" class="row"></div>`;
    }
 }
  
 customElements.define("meal-list", MealList);