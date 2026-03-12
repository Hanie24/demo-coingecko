import CryptoCardList from "../../Components/Organism/CryptoCard/CryptoCardList";
import GlobalGrid from "../../Components/Organism/Globals/GlobalGrid";
import Container from "../../Components/Templates/Container/Container";

export default function Dashboard() {
  return (
    <Container>
      <h1>Dasboard</h1>
      <CryptoCardList />
      <GlobalGrid />
    </Container>
  );
}
