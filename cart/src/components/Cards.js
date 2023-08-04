import React from 'react'

function Cards({onSale, rating, product, priceBeforeDiscount, price, id, addToCart }) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Sale badge--> */}
                {onSale ? <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div> : <></>}
                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product}</h5>
                        {/* <!-- Product reviews--> */}
                        {rating ? <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div> :
                            <></>}

                        {/* <!-- Product price--> */}
                        {priceBeforeDiscount ? <span className="text-muted text-decoration-line-through">{priceBeforeDiscount}</span> : <></>}
                        {" " + price + " "}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="add-to-cart btn btn-outline-dark mt-auto" href="#" onClick={(event) => {addToCart(product, price, id, event)}} id={id}>Add to cart</a></div>
                </div>
            </div>
        </div>

    )
}

function addToCart(product, price, id, event) {
    console.log(event)
    // addToCart(product, price, id)
}

export default Cards