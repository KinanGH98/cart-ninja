import {Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Store from "./pages/Store.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import {useShoppingItems} from "./context/ShoppingItemsContext.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer.jsx";
import {CircleLoader} from "react-spinners";

export default function App()
{
    const {products} = useShoppingItems()

    // The products is null when supabase database is paused.
    if (!products) return (
        <div className='d-flex gap-5 text-center text-muted flex-column justify-content-center align-items-center'
             style={{height: '100vh'}}>
            <h4>Sorry, the database is paused 😢
                <br/>
                try again later.
            </h4>
        </div>)

    return (
        <>
            {
                products.length <= 0 ?
                    <LoadingSpinner></LoadingSpinner> :
                    <>
                        <Navbar></Navbar>
                        <ShoppingCart></ShoppingCart>
                        <Container className='bg-light'>
                            <Routes>
                                <Route path='/' element={<Store/>}></Route>
                                <Route path='/admin' element={<Admin/>}></Route>
                            </Routes>
                        </Container>
                        <ToastContainer pauseOnFocusLoss={false} position='bottom-right' draggablePercent={15}/>
                        <Footer></Footer>
                    </>
            }
        </>
    )
}
