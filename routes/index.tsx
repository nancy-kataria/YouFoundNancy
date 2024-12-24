import Fact from "../islands/Fact.tsx";
import Welcome from "../islands/welcome.tsx";

export default function Home() {
  return (
    <div class="main-body">
      <Welcome />
      <Fact />
    </div>
  );
}
