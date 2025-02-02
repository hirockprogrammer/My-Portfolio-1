"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ProjectCard } from "@/components/project_card/project_card";
export const Items: any = ({ currentItems }: { currentItems: number[] }) => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {currentItems?.map((item,index) => (
        <div key={index}>
          <ProjectCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage, items }: { itemsPerPage: number, items: any }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(items?.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  return (
    <div data-aos="fade-up">
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName=" flex justify-center space-x-2 mt-4"
        pageClassName="px-3 py-1 border rounded"
        activeClassName="bg-blue-500 text-white"
      />
    </div>
  );
}
