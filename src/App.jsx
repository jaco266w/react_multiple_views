import { useState } from "react";


export default function App() {
  const [visible, setVisible] = useState(0);
  const views = [
    <section>1</section>,
    <section>2</section>,
    <section>3</section>,
    <IntroView />,
    <section>5</section>,
    <section>6</section>,
    <section>7</section>,
    <section>8</section>,
    <section>9</section>,
    <section>10</section>,
  ];

  function setNextView() {
    setVisible((oldValue) => {
      if (oldValue === views.length - 1){
        return 0;
      }
      return oldValue + 1;
    })
  }
  
  return (
    <>
      {views[visible]}
      <button onClick={setNextView}>Næste</button>
    </>
  );
}

function IntroView() {
  return (
    <>
      <h2>Velkommen til min side</h2>
      <p>Her er en masse tekst</p>
    </>
  );
}