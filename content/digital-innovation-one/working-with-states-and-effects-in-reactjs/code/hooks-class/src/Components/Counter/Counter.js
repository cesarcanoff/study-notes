export default function Counter() {
  let quantityNumber = 10;

  function upQuantity() {
    quantityNumber += 1;
    document.getElementById("counter-box").innerHTML = quantityNumber;
    console.log(quantityNumber);
  }

  return (
    <>
      <h1 id="counter-box">{quantityNumber}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </>
  );
}
