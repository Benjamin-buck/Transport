import Navbar from "@/components/Navbar";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto container mt-8">
        <Title>Hello, John Doe</Title>
      </div>
    </div>
  );
}
