class CarMeal extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<div class="container">

        <div id="carouselExampleControls" class="carousel" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <h1 style="display: block;position: absolute;margin:30vh 30px;font-weight: 700;color: white;text-shadow: 10px 2px 50px #1f1f14;">Discover Every Meals</h1>
                <img src="https://www.homechef.com/assets/cards/fb-aa993535126ad787ae16b17ad7fbd817ecf163f9181757de81a5818f5f686ff2.jpg" class="" style="max-height: 300px;width: 100%;object-fit: cover;object-position: center;border-radius:10px;" alt="...">
            </div>
            </div>
          </div>

        </div>`;
    }
 }
  
 customElements.define("carousel-meal", CarMeal);