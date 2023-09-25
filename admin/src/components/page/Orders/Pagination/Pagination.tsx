import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
    nPages: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ nPages, currentPage, setCurrentPage }: PaginationProps) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const handlePreviousPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    return (
        <>
            <div
                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex">
                        <li>
                            <a
                                onClick={handlePreviousPage}
                                className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                                Previous
                            </a>
                        </li>
                        {pageNumbers.map(pgNumber => (
                            <li key={pgNumber}>
                                <a
                                    className={`${currentPage === pgNumber ? 'relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300' : 'relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}`}
                                    onClick={() => setCurrentPage(pgNumber)}
                                    href="#">
                                    {pgNumber}
                                    {
                                        currentPage === pgNumber ?
                                            <span
                                                className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                                                (current)
                                            </span>
                                            :
                                            <></>}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                onClick={handleNextPage}
                                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                href="#">
                                Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Pagination