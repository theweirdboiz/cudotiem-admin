import React from "react";
import PropTypes from "prop-types";
import { Button, Status, Checkbox } from "@components";
// import IconOption from "@components/icons/IconOption";
import TooltipOption from "../../components/tooltip/TooltipOption";
import { Link } from "react-router-dom";

import { IconPlus, IconOption } from "@components";
const OrdersPage = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Orders</h3>
        <Button
          kind="primary"
          className="max-w-[14rem] text-text-2 py-2 px-3"
          href="/orders"
        >
          <IconPlus w="w-4" h="h-4" stroke="2.5" />
          <span className="ml-1">Create new</span>
        </Button>
      </div>
      <div className="p-3 border-b border-b-text-4">
        <input
          className="border border-strock shadow-sd-primary rounded-lg p-2 max-w-[22rem] w-full"
          type="search"
          placeholder="search"
        />
      </div>
      <table className="w-full table-auto">
        <thead className="">
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center text-text-2">
          <tr className="cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-sm my-1">
            <td>
              <Checkbox />
            </td>
            <td>01</td>
            <td>Malcolm Lockyer</td>
            <td>kiasxz@gmail.com</td>
            <td>$123.391</td>
            <td>
              <Status text="Pending" />
            </td>
            <td>12.01.2019</td>
            <td>
              <div className="flex items-center justify-center">
                <TooltipOption icon={<IconOption />}>
                  <ul className="text-start w-24">
                    <li className="block hover:bg-primary hover:bg-opacity-10 px-3 py-1 rounded-lg hover:text-primary">
                      <Link>View</Link>
                    </li>
                    <li className="block hover:bg-primary hover:bg-opacity-10 px-3 py-1 rounded-lg hover:text-primary">
                      <Link>View</Link>
                    </li>
                    <li className="block hover:bg-primary hover:bg-opacity-10 px-3 py-1 rounded-lg hover:text-primary">
                      <Link>View</Link>
                    </li>
                  </ul>
                </TooltipOption>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center gap-x-3 mt-3">
        <button className="px-2 py-1 rounded-md bg-secondary bg-opacity-10">
          Prev
        </button>

        <button className="px-2 py-1 rounded-md bg-secondary bg-opacity-10">
          Next
        </button>
      </div>
    </>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
