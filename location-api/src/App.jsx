import { useEffect, useState } from "react";
import './mystyles.css'
import "./App.css";
import SimpleMap from "./components/SimpleMap.jsx";

//hi

function App() {
  const [count, setCount] = useState(0);
  const [myCrd, setMyCrd] = useState({});

  function success(pos) {
    const crd = pos.coords;
    setMyCrd(crd);
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
            console.log("We are in prompt mode!");
          } else if (result.state === "denied") {
            // do other things
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser");
    }
    console.log(navigator);
  }, []);

  return (
    <section className={"container"}>
      <p>Lat: {myCrd.latitude}</p>
      <p>Long: {myCrd.longitude}</p>
      <p>Acc: {myCrd.accuracy}</p>

      <SimpleMap />
    </section>
  );
}

export default App;
