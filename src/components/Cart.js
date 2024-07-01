import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Cart(){


    return(
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Agri Drone</td>
            <td>1</td>
            <td>Rs.130000/-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Brahma F4</td>
            <td>2</td>
            <td>Rs. 4999/-</td>
          </tr>
          <tr>
            <td>3</td>
            <td >3D Mapping</td>
            <td >3</td>
            <td>Rs.50000/-</td>
          </tr>
        
         
        </tbody>
        <tfoot className='text-center'>
            <tr >
              <td colSpan={2} className='cart-footer'><h5>Total</h5></td>
              <td colSpan={2} className='cart-footer'><h5>Rs.30000/-</h5></td>
            </tr>
          </tfoot>
      </Table> 

      <Button variant="success" style={{ float:'right' }}>Checkout</Button>
      </div>
    );
}

export default Cart;