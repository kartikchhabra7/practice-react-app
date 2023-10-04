import React, { useState, useEffect, useCallback } from "react";
import useFetchData from "./useFetchData";
import "./InfiniteContainer.css";

const InfiniteContainer = () => {
  const { storeApiData, hasLoading, isError } = useFetchData();
  const [visibleProducts, setIsVisibleProducts] = useState(8);

  const handleScroll=useCallback(()=>{
    const isAtBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

  if (isAtBottom) {
    handleMoreProducts();
  }
  },[])
  

  function handleMoreProducts() {
    setIsVisibleProducts((prevProducts) => prevProducts + 8);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="custom-height-infinite">
        <h1 className="text-center">Infinite Scrolling</h1>
        <hr className="infinite-horizental-line" />
        <div className="container ">
          <div className="row ">
            {storeApiData.slice(0, visibleProducts).map((value) => (
              <div
                className="col-lg-6 col-md-4 col-sm-6"
                style={{ marginBottom: "10px" }}
                key={value.id}
              >
                <div className="text-center">
                  <img
                    className=""
                    src={value.download_url}
                    alt={value.author}
                    style={{ width: "100%", height: "290px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {hasLoading && <h1 className="text-white">Loading...</h1>}
      {isError && <p>Error: {isError}</p>}
    </>
  );
};

export default InfiniteContainer;
