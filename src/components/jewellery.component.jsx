import JewellItemCard from "./jewellItemCard.component";
import { Link, useParams } from "react-router-dom";
import NotFound from "./notFound.component";
import { useEffect, useState } from "react";

const validCategories = [
  "necklaces",
  "bangles",
  "rings",
  "pendants",
  "bracelets",
  "chains",
  "earrings",
];

const Jewellery = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [metalSelect, setMetalSelect] = useState("All metal");
  const [weight, setWeight] = useState("All weight");

  const { category } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource...");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });

    setMetalSelect("All metal");
    setWeight("All weight");
  }, [category]);

  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  const makeCapital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  let categoryTitle = makeCapital(category);

  const handleMetalSelect = (metal) => {
    setMetalSelect(metal);
  };

  const handleweight = (weight) => {
    setWeight(weight);
  };

  return (
    <div>
      <div className="container-xl">
        <div className="row text-start">
          <div className="col-12 col-lg-3 col-xl-3 mb-3">
            <div className="category-selector-jewell">
              <div className="ms-3">
                <h1 className="category-selector-jewell-title">CATEGORIES</h1>
              </div>
              <ul className="category-list-jewell ms-2">
                <li
                  className={`category-item-jewell ${
                    category === "necklaces" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/necklaces" className="nav-link">
                    NECKLACES
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "bangles" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/bangles" className="nav-link">
                    BANGLES
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "rings" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/rings" className="nav-link">
                    RINGS
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "pendants" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/pendants" className="nav-link">
                    PENDANTS
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "bracelets" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/bracelets" className="nav-link">
                    BRACELETS
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "earrings" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/earrings" className="nav-link">
                    EARRINGS
                  </Link>
                </li>

                <li
                  className={`category-item-jewell ${
                    category === "chains" ? "active-link" : ""
                  }`}
                >
                  <Link to="/jewellery/chains" className="nav-link">
                    CHAINS
                  </Link>
                </li>
              </ul>

              <div className="mt-5 ms-3">
                <h1 className="metal-selector-jewell-title">METAL</h1>
              </div>
              <div className="metal-list-jewell mt-4 ms-3">
                <button
                  className={`btn btn-outline metal-item-jewell ${
                    metalSelect === "All metal" ? "active-metal-btn" : ""
                  }`}
                  onClick={() => handleMetalSelect("All metal")}
                >
                  All Metal
                </button>
                <br />
                <button
                  className={`btn btn-outline metal-item-jewell ${
                    metalSelect === "22k" ? "active-metal-btn" : ""
                  }`}
                  onClick={() => handleMetalSelect("22k")}
                >
                  Yellow Gold 22K
                </button>
                <br />
                <button
                  className={`btn btn-outline metal-item-jewell ${
                    metalSelect === "18k" ? "active-metal-btn" : ""
                  }`}
                  onClick={() => handleMetalSelect("18k")}
                >
                  White Gold 18K
                </button>
              </div>

              <div className="mt-3 ms-3">
                <h1 className="weight-selector-jewell-title ">WEIGHT</h1>
              </div>
              <div className="weight-list-jewell mt-4 ms-3">
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === 'All weight' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight("All weight")}
                >
                  All Weight
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '<2' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('<2')}
                >
                  Less Than 2 grams
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '2-4' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('2-4')}
                >
                  2 grams - 4 grams
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '4-8' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('4-8')}
                >
                  4 grams - 8 grams
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '8-12' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('8-12')}
                >
                  8 grams - 12 grams
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '12-20' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('12-20')}
                >
                  12 grams - 20 grams
                </button>
                <br />
                <button
                  className={`btn btn-outline weight-item-jewell ${weight === '20-24' ? 'active-weight-btn' : ''}`}
                  onClick={() => handleweight('20-24')}
                >
                  20 grams - 24 grams
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-xl-9 ">
            <div className="items-jewell">
              <div className="text-center mb-5">
                <h1 className="jewell-category text-center">{categoryTitle}</h1>
              </div>
              <div className="row">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!isPending && !error && data && (
                  <JewellItemCard data={data} metalSelect={metalSelect} weightSelect={weight} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
