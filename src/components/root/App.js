import React from "react";
import { Container } from "reactstrap";
import Nav from '../nav/Nav';
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import { Route, Routes} from "react-router-dom"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound"


function App() {
  return (
    <Container>
      <Nav/>
     <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product" element={<Dashboard/>} />
        <Route path="/saveproduct/:id" element={<AddOrUpdateProduct/>} />
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>} />
        <Route path="/cart" element={<CartDetail/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
    </Container>
  );
}

export default App;
