import { useState } from "react";
import ORDERS__DATA from "../../../../api/orders"
import Headings from "../Headings/Headings";
import Pagination from "../Pagination/Pagination";
import Row from "../Row/Row"

interface RowProps {
    id: string;
    name: string;
    payment: string;
    total: number;
    status: string;
}

const Table = () => {
    // User is currently on this page
    const [currentPage, setCurrentPage] = useState<number>(1);
    // No of Records to be displayed on each page   
    const [rowsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * rowsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - rowsPerPage;

    const current = ORDERS__DATA.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages: number = Math.ceil(ORDERS__DATA.length / rowsPerPage)

    return (
        <>
            <div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <Headings />
                                <tbody>
                                    {
                                        current.map((order: RowProps) =>
                                            <Row
                                                data={order}
                                                key={order.id}
                                            />)
                                    }
                                </tbody>
                            </table>
                            <Pagination
                                nPages={nPages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Table