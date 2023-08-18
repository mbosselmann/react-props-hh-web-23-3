import "./styles.css";

// function Animal(props) {

//   return (
//     <div>
//       {props.sound}{" "}
//       <span role="img" aria-label={props.name}>
//         {props.emoji}
//       </span>
//     </div>
//   );
// }

// function Animal(props) {
//   // console.log(props);
//   const { sound, emoji, name } = props;
//   // console.log(sound);
//   // console.log(emoji);
//   // console.log(name);
//   return (
//     <div>
//       {sound}{" "}
//       <span role="img" aria-label={name}>
//         {emoji}
//       </span>
//     </div>
//   );
// }

function Animal({ sound, emoji, name, onPet, isHungry }) {
  // function handlePet() {
  //   console.log("Thank you " + sound);
  // }
  return (
    <button onClick={onPet} type="button">
      {isHungry ? "Feed me!" : sound}{" "}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </button>
  );
}

export default function App() {
  function handlePet() {
    console.log("Thank you!");
  }
  return (
    <div>
      <Animal sound="Meow" emoji="🐈" name="A cat" onPet={handlePet} isHungry />
      <Animal sound="Wuff" emoji="🐶" name="A dog" onPet={handlePet} />
      <Animal sound="Piep" emoji="🐁" name="A mouse" onPet={handlePet} />
    </div>
  );
}
