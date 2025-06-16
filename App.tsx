import React from "react";
import { I18nextProvider } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InviteCard from "./components/InviteCard";
import HostMessage from "./components/HostMessage";
import "./App.css";

const App: React.FC = () => {
  return (
      <div className="app-container">
        <Header />
        <Hero />
        <InviteCard />
        <HostMessage />
      </div>
  );
};

export default App;