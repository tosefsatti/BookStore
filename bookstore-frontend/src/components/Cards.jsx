import React from "react";

const Cards = (props) => {
  return (
    <div className="mt-5">
      <div className="card bg-base-200 w-96 md:w-80 xl:shadow hover:scale-105 duration-150 dark:bg-slate-600 dark:text-white">
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
            <div className="badge badge-secondary">{props.category}</div>
          </h2>
          <p>{props.title}</p>
          <div className="card-actions justify-between mt-3 gap-6">
            <div className="badge badge-outline ">${props.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer px-2 py-3 mr-3 md:mr-0">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
