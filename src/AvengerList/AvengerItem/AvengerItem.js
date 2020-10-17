import React from "react";
import { withRouter } from "react-router-dom";

const AvengerItem = ({ avenger, history }) => {
  return (
    <li className="mt-10 md:mt-0">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white">
            <img
              src={`${avenger.thumbnail.path}.${avenger.thumbnail.extension}`}
              alt=""
              onClick={() => history.push(`/avengers/${avenger.id}`)}
            />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-lg leading-6 font-medium text-gray-900">
            {avenger.name}
          </h4>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
      </div>
    </li>
  );
};

export default withRouter(AvengerItem);
