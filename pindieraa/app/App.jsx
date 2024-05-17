"use client";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/footer";
import { useEffect } from "react";
import { useStore } from "./store/app-store";

export const App = (props) => {
  const store = useStore();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
