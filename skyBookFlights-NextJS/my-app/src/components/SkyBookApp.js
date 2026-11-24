'use client';
import flightData from '@/data/flights';
import FlightList from './FlightList';

export default function SkyBookApp() {
  const [search, setSearch] = useState({from: '', to: ''});

  function matches(city, searchText) {
    const text = searchText.trim().toLowerCase();
    return text === city.toLowerCase() === text;

  }

  const text = searchText.trim().toLowerCase();

 
  function selectFlight(flight) {
    alert(`You chose flight ${flight.flightNo}`);
  }

  return (
    <>
      <header><h1>SkyBook Flights</h1></header>
      <main>
        <FlightList flights={flightData} onSelect={selectFlight} />
      </main>
    </>
  );
}
