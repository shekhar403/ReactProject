import './App.css';
import Cards from './components/Cards';
import CartProducts from './components/CartProducts';

function App() {
  class Product {
    constructor(name, priceLimit, discount, rating, onSale, key) {
      this.name = name
      this.priceLimit = priceLimit
      this.discount = discount
      this.rating = rating
      this.onSale = onSale
      this.key = key
    }
  }

  let products = [new Product("Fancy Product", [40.0, 80.0], undefined, false, false, "p1"),
  new Product("Special Item", [20], 2.0, true, true, "p2"),
  new Product("Sale Item", [50], 25.0, true, false, "p3"),
  new Product("Popular Item", [40], undefined, false, true, "p4"),
  new Product("Sale Item", [50], 25.0, true, false, "p5"),
  new Product("Fancy Product", [120, 280], undefined, false, false, "p6"),
  new Product("Special Item", [20], 2.0, true, true, "p7"),
  new Product("Popular Item", [40], undefined, false, true, "p8")]

  let productArray = []
  let productCartDetails = []
  let totalAmount = 0;

  products.forEach((product) => {
    productArray.push(<Cards onSale={product.onSale} rating={product.rating} product={product.name} priceBeforeDiscount={product.priceLimit.count == 2 ? `$${product.priceLimit[0]}.00 - $${product.priceLimit[1]}.00` : `$${product.priceLimit[0]}.00`} price={product.discount ? `$${product.priceLimit[0] - product.discount}.00` : `$${product.priceLimit[0]}.00`} id={product.key} addToCart={addToCart} key={product.key} />)
  })

  function showCart(event) {
    event.preventDefault();
    if (document.getElementById("cartsTable").style.display === "inline-block") {
      document.getElementById("cartsTable").style.display = "none";
    }
    else {
      document.getElementById("cartsTable").style.display = "inline-block";
    }

  }

  function addToCart(product, price, id, event) {
    event.target.classList.add("disabled");
    productCartDetails.push({ idKey: id, priceKey: price, productKey: product })

    document.getElementById("cartCount").textContent = productCartDetails.length;
    populateTableView(productCartDetails[productCartDetails.length - 1])
    totalAmount = totalAmount + parseFloat(price.slice(1, price.length))

    document.getElementById("totalAmount").textContent = totalAmount
  }

  function populateTableView(p) {
    const table = document.getElementById("cartsMainTable");
    let userRow = table.insertRow(table.rows.length);
    let idCell = userRow.insertCell(0);
    idCell.textContent = p.idKey;
    let nameCell = userRow.insertCell(1);
    nameCell.textContent = p.productKey;
    let priceCell = userRow.insertCell(2);
    priceCell.textContent = p.priceKey;
    let removeCell = userRow.insertCell(3);
    removeCell.textContent = "Remove";
    removeCell.addEventListener("click", (event) => {
      document.getElementById(p.idKey).classList.remove("disabled");
      table.deleteRow(userRow.rowIndex);
      productCartDetails.filter((product, index) => {
        if (product.idKey === p.idKey) {
          productCartDetails.splice(index, 1);
          document.getElementById("cartCount").textContent = productCartDetails.length;
          totalAmount = totalAmount - parseFloat(product.priceKey.slice(1, product.priceKey.length))
          document.getElementById("totalAmount").textContent = totalAmount
        }
      })
    });
  }

  return (
    <div>
      <CartProducts />
      {/* <!-- Navigation--> */}
      <nav className="p navbar navbar-expand-lg navbar-light bg-light position-fixed" style={{ top: 0, left: 0, right: 0 }}>
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form onSubmit={showCart} className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span id='cartCount' className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productArray}

          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>


    </div>
  );
}

export default App;
