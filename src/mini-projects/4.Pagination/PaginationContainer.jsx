import React, { useState } from "react";
import useFetch from "./useFetch";
import "./PaginationContainer.css";

const PaginationControls = ({ visibleProducts, handleMoreProducts }) => {
  return (
    <>
      <div className="pagination-btn-section">
        {visibleProducts < 26 ? (
          <button onClick={handleMoreProducts} className="pagination-button">
            Load more
          </button>
        ) : null}
      </div>
    </>
  );
};
const MasterContainer = () => {
  const { storeApiData, isError, hasLoading } = useFetch();
  const [visibleProducts, setIsVisibleProducts] = useState(8);

  function handleMoreProducts() {
    setIsVisibleProducts((prevProducts) => prevProducts + 8);
  }

  if (hasLoading) {
    return <p className="pagination-loading">Loading...</p>;
  }

  if (isError) {
    return <p className="pagination-error">Error: {isError}</p>;
  }

  return (
    <>
      <div className="custom-height-pagination">
        <h1 className="text-center">Single Page Pagination</h1>
        <hr className="pagination-horizental-line" />
        <div className="container">
          <div className="row">
            {storeApiData.slice(0, visibleProducts).map((value, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6"
                style={{ marginBottom: "10px" }}
                key={value.id}
              >
                <div className="text-center">
                  <img
                    className="pagination-images"
                    src={value.download_url}
                    alt={`Images ${index}`}
                    style={{ width: "100%", height: "290px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaginationControls {...{ visibleProducts, handleMoreProducts }} />
    </>
  );
};

export default MasterContainer;
