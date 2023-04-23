import { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { Modal } from '@components/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '@contexts/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Navbar = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { cartItems, getTotal, removeFromCart, resetCart, addQuantity} = useContext(CartContext);
  let totalValue : number = getTotal();

  return (
    <nav className="py-[8px] lg:px-[40px]">
      <div className="nav-container flex items-center justify-between gap-[10px]">
        <div className='nav-left flex items-center w-[80%]'>
          <img src="./img/header-img/small-logo.png" className="nav-small-icon lg:hidden" alt="" />
          <img src="./img/header-img/a.svg" alt="" className="company-icon hidden lg:block" />
          <input type="text" className="search-bar w-full lg:w-[600px]" placeholder="Buscar productos, marcas y más..." />
        </div>
        <div className='nav-right flex items-center'>
          <div className='icon-container lg:hidden'>
            <MenuIcon />
          </div>
          <div className='icon-container'>
            <button onClick={() => setOpenModal(!openModal)}>
              <ShoppingCartOutlinedIcon />
              <Modal
                open={openModal}
                setOpen={setOpenModal}
                modalTitle='Shopping Cart'
              >
                <div className='cart-container w-[300px]'>
                  {
                    cartItems?.map((item) => (
                      
                      <div className='cart-box flex justify-around items-center' key={item.id}>
                        <div className='product-info flex gap-2 flex-col'>
                          <div className='product-left'>
                            <span className='product-name'>Product-{item.id}</span>
                          </div>
                          <div className='product-right flex gap-2'>
                            <img src={item.img} alt='' className='w-[50px] h-[50px]' />
                            <div className='product-value flex flex-col'>
                              <span className='product-price'>{item.price}</span>
                              <span className='product-discount'>{item.discount}%</span>
                            </div>
                          </div>
                          <div>
                            <span className='sub-total'>sub-total: <span className='font-normal'>{((parseFloat(item.price) - (parseFloat(item.price)* (parseInt(item.discount)/100))) * item.quantity).toFixed(2)}$</span></span>
                          </div>
                        </div>
                        <div className="quantity-box flex gap-1 items-center">
                          <button>
                            <RemoveIcon onClick={()=>addQuantity(false,item.id)} />
                          </button>
                          <input type="text"  value={item.quantity} className='quantity-input' disabled/>
                          
                          <button onClick={()=>addQuantity(true,item.id)}>
                            <AddIcon />
                          </button>
                        </div>

                        <div>
                          <button className='delete-product' onClick={()=> removeFromCart(item.id)}>
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    ))
                  }
                  <div className="cart-total flex flex-col gap-2 items-start">
                    <span className='total-value font-medium'>Total: {totalValue.toFixed(2)}$</span>
                    <button onClick={()=> resetCart()}>Reset cart</button>
                  </div>
                </div>
              </Modal>
            </button>
          </div>
        </div>
      </div>
      <div className="nav-container justify-between items-center hidden lg:flex">
        <div className="flex">
          <span className="w-[182px]">Ingresa tu domicilio</span>
          <ul className="services-list lg:gap-[5px] xl:gap-[20px]">
            <li className="w-max flex" >Categorias &nbsp;<img src="./img/header-img/pseudo.svg" alt="" /></li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda / PQR</li>
          </ul>
        </div>
        <ul className="services-list lg:gap-[5px] xl:gap-[20px]">
          <li className="text-black"><span>Crea tu cuenta</span></li>
          <li className="text-black"><span>Ingresa</span></li>
          <li className="text-black"><span>Mis compras</span></li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar }