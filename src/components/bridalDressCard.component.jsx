const BridalDressCard = ({data,cultureSelect}) => {
  const filteredBridalData =
    cultureSelect === "All"
      ? data
      : data.filter((item) => item.culture === cultureSelect);

  return (
    <>

    {filteredBridalData.length === 0 ? (
      <div>No results found</div>
    ):(
      filteredBridalData.map((data) => (
        <div className="col-6 col-lg-4 col-xl-4 text-center mt-3"  key={data.id}>
          <div className="item-card-bridal">
            <div className="item-image-bridal" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${data.imgUrl})`
              }}></div>
            <div className="item-des-demo-bridal mt-1">{data.itemType} {data.itemCode}</div>
          </div>
        </div>
      ))
    )}

  
    </>
  );
};

export default BridalDressCard;
