import type { ComponentType } from 'react';

import ReactPaginateModule from 'react-paginate';

import type { ReactPaginateProps } from 'react-paginate';



type ModuleWithDefault<T> = {
  default: T;
};

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>

    // <ReactPaginate
    //   pageCount={pageCount}
    //   forcePage={currentPage - 1}
    //   onPageChange={({ selected }) =>
    //     onPageChange(selected + 1)
    //   }
    //   previousLabel="<"
    //   nextLabel=">"
    //   containerClassName={css.pagination}
    //   activeClassName={css.active}
    // />
  );
}