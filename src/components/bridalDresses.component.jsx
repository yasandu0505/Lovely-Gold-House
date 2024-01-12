import BridalDressCard from "./bridalDressCard.component";
import { Link, useParams } from "react-router-dom";
import NotFound from "./notFound.component";
import { useEffect, useState } from "react";

const validCategories = [
  "shoes",
  "frocks",
  "sarees",
  "flower-bouquets",
  "earrings",
  "necklaces",
];

const BridalDresses = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [selectCulture, setSelectCulture] = useState("All");

  const { category } = useParams();

  // useEffect(() => {
  //   setSelectCulture('All');
  // },[category]);

  useEffect(() => {
    fetch(`http://localhost:8001/${category}`)
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

    setSelectCulture('All');
  }, [category]);

  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  const makeCapital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  let categoryTitle = makeCapital(category);

  const handleCultureSelect = (culture) => {
    setSelectCulture(culture);
  };

  return (
    <div>
      <div className="container-xl">
        <div className="row text-start">
          <div className="col-12 col-lg-3 col-xl-3 mb-3">
            <div className="category-selector-bridal">
              <div className="ms-3">
                <h1 className="category-selector-bridal-title ">CATEGORIES</h1>
              </div>
              <ul className="category-list-bridal ms-2">
                <li
                  className={`category-item-bridal ${
                    category === "shoes" ? "active-link" : ""
                  }`}
                >
                  <Link to="/bridal-dresses/shoes" className="nav-link">
                    SHOES
                  </Link>
                </li>
                <li
                  className={`category-item-bridal ${
                    category === "frocks" ? "active-link" : ""
                  }`}
                >
                  <Link to="/bridal-dresses/frocks" className="nav-link">
                    FROCKS
                  </Link>
                </li>

                <li
                  className={`category-item-bridal ${
                    category === "sarees" ? "active-link" : ""
                  }`}
                >
                  <Link to="/bridal-dresses/sarees" className="nav-link">
                    SAREES
                  </Link>
                </li>

                <li
                  className={`category-item-bridal ${
                    category === "flower-bouquets" ? "active-link" : ""
                  }`}
                >
                  <Link
                    to="/bridal-dresses/flower-bouquets"
                    className="nav-link"
                  >
                    FLOWER BOUQUETS
                  </Link>
                </li>

                <li
                  className={`category-item-bridal ${
                    category === "earrings" ? "active-link" : ""
                  }`}
                >
                  <Link to="/bridal-dresses/earrings" className="nav-link">
                    EARRINGS
                  </Link>
                </li>

                <li
                  className={`category-item-bridal ${
                    category === "necklaces" ? "active-link" : ""
                  }`}
                >
                  <Link to="/bridal-dresses/necklaces" className="nav-link">
                    NECKLACES
                  </Link>
                </li>
              </ul>

              <div className="mt-5 ms-3">
                <h1 className="culture-selector-title">CULTURE</h1>
              </div>
              <div className="culture-list mt-4 ms-3">
                <button
                  className={`btn btn-outline culture-item ${
                    selectCulture === "All" ? "active-culture-btn" : ""
                  }`}
                  onClick={() => handleCultureSelect("All")}
                >
                  All Cultures
                </button>
                <br />
                <button
                  className={`btn btn-outline culture-item ${
                    category === "frocks" ? "d-none" : ""
                  } ${selectCulture === "kandian" ? "active-culture-btn" : ""}`}
                  onClick={() => handleCultureSelect("kandian")}
                >
                  Kandian Bridal
                </button>
                <br className={`${category === "frocks" ? "d-none" : ""}`} />
                <button
                  className={`btn btn-outline culture-item ${
                    selectCulture === "indian" ? "active-culture-btn" : ""
                  }`}
                  onClick={() => handleCultureSelect("indian")}
                >
                  Indian Bridal
                </button>
                <br />
                <button
                  className={`btn btn-outline culture-item ${
                    category === "sarees" ? "d-none" : ""
                  } ${selectCulture === "western" ? "active-culture-btn" : ""}`}
                  onClick={() => handleCultureSelect("western")}
                >
                  Western Bridal
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-xl-9 ">
            <div className="items-bridal">
              <div className="text-center mb-5">
                <h1 className="bridaldress-category text-center">
                  {categoryTitle}
                </h1>
              </div>
              <div className="row">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!isPending && !error && data && (
                  <BridalDressCard data={data} cultureSelect={selectCulture} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridalDresses;
