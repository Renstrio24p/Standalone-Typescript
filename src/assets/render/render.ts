import Footer from "../../components/Footer";
import { setupCounter } from "../../components/Counter";
import Rows from "../../components/Rows";
import UniqueHash from "../security/hashes";

export default function Render() {
  // Get Render's ID
  const ContainerDOM = document.getElementById('container') as HTMLDivElement | null;
  const APP = document.getElementById('count') as HTMLButtonElement | null;
  const Row = document.getElementById('rows') as HTMLDivElement | null;
  const Foot = document.getElementById('footer') as HTMLDivElement | null;

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    ContainerDOM?.setAttribute('id', UniqueHash());
    APP?.setAttribute('id', UniqueHash());
    Row?.setAttribute('id', UniqueHash());
    Foot?.setAttribute('id', UniqueHash());
  });

  // Render the JS Component
  if (APP) {
    setupCounter(APP);
  }
  if (Row) {
    Rows(Row);
  }
  if (Foot) {
    Footer(Foot);
  }
}
