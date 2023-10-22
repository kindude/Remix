import React, { useState } from "react";
import { Link } from "@remix-run/react";
import "../styles/postsstyles.css"


interface Props {
  data: Post[];
  itemsPerPage: number;
}


export default function CardsList(props: Props) {
  const { data, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="postsgrd">
      <h1 className="text-center" style={{ margin: "0 auto", maxWidth: "600px" }}>Posts</h1>

      <div className="row cards">
        {visibleData.map((item: Post) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/${item.id}`}>{item.title}</Link>
              </h5>
              <h6 className="card-subtitle">{item.author}</h6>
              <p className="card-text">{item.text}</p>
              <h6 className="card-subtitle">
                {item.publication_date}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} out of {totalPages}</span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
