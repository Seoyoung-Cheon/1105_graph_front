import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopProducts } from "../../redux/slices/apiSlice";

const TopProducts = () => {
  const state = useSelector((state) => state.apis.topProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  // console.log(state);
  return (
    <div className="block-wrap my-[14px]">
      <HeadTitle title="Top Products" />
      <div className="tbl-products">
        <table className="w-full border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="tbl-title">#</th>
              <th className="tbl-title">Name</th>
              <th className="tbl-title">Popularity</th>
              <th className="tbl-title">Sales</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((item, index) => (
              <tr key={item.id}>
                <td className="tdl-data">{index + 1}</td>
                <td className="tdl-data">{item.name}</td>
                <td className="tdl-data">
                  <div className="tbl-progress bg-[#c3d3e2] min-w-[180px] h-[5px] rounded-full overflow-hidden relative">
                    <div
                      className="bar-fill bg-[#0000FF] absolute left-0 top-0 rounded-full h-full"
                      style={{ width: `${item.popularitypercent}%` }}
                    ></div>
                  </div>
                </td>
                <td className="tdl-data">
                  <div className="bg-[#f0f9ff] text-[#0095ff] flex items-center justify-center border border-[#0095ff] rounded-md min-w-[45px] h-6 text-[0.625rem]">
                    {item.salespercent}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
