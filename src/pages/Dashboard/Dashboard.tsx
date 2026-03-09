import CryptoCardList from "../../Components/Organism/CryptoCard/CryptoCardList";
import Container from "../../Components/Templates/Container/Container";

export default function Dashboard() {
  return (
    <Container>
      <h1>Dasboard</h1>
      <CryptoCardList />
    </Container>
  );
}
