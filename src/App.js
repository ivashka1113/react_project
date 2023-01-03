import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyA-nKO7hO_jHQObbbPAbRn6LDNCpxwV9Ds",
  authDomain: "mrdonald-s-3afb3.firebaseapp.com",
  databaseURL:
    "https://mrdonald-s-3afb3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonald-s-3afb3",
  storageBucket: "mrdonald-s-3afb3.appspot.com",
  messagingSenderId: "1050134338756",
  appId: "1:1050134338756:web:12aa1b2a7fa63913f6fd91",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const auth = useAuth(firebase.default.auth);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
