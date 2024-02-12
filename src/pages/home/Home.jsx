import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div
        className="home"
        style={{ backgroundImage: `url(${banner})`, objectFit: "cover" }}
      >
        <div className="headercontainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
