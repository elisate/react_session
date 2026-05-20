import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import "../styles/home.css";

function Home() {

  const arrivals = [
    {
      id: 1,
      title: "Ana Grey Dining Chair",
      price: "$299.99",
      image: image1
    },
    {
      id: 2,
      title: "Natural Wood Dining Chair",

      price: "$199.99",
      image: image2
    },
    {
      id: 3,
      title: "Paolo Black Wood Dining Chair",
      price: "$249.99",
      image: image3
    },
    {
      id: 4,
      title: "Curved Back Dining Chair",
      price: "$100.00",
      image: image4
    }
  ]



  return (
    <div className="card-container">
      {arrivals.map((item)=>(
        <div>
        <div>
          <img src={item.image} className="image-product"/>
        </div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        </div>
      ))}

    </div>
  )
}

export default Home