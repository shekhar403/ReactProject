import React from 'react'
import '../styles/CartProducts.css'




function CartProducts() {
    return (
        <div id='cartsTable' className='floating'>
            <table id='cartsMainTable' className="table table-striped table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <h2 className='text-dark bg-light'>Total Price : $<span id="totalAmount">0</span>.00</h2>
        </div>

    )
}




export default CartProducts