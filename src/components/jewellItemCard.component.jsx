const JewellItemCard = ({ data, metalSelect, weightSelect }) => {
  const filteredJewellData = data.filter(
    (item) =>
      (metalSelect === "All metal" || item.metal === metalSelect) &&
      (weightSelect === "All weight" || item.weightRange === weightSelect)
  );

  return (
    <>
      {filteredJewellData.length === 0 ? (
        <div className="no-results-found">No results found</div>
      ) : (
        filteredJewellData.map((data) => (
          <div className="col-6 col-lg-4 col-xl-4 text-center mt-3" key={data.id}>
            <div className="item-card-jewell">
              <div
                className="item-image-jewell"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${data.imgUrl})`,
                }}
              ></div>
              <div className="item-des-demo-jewell mt-1">
                {data.itemType} {data.itemCode} {data.weight}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default JewellItemCard;
