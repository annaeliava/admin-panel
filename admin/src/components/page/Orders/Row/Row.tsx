const Row = (props: any) => {
    const { data } = props;

    return (
        <>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {data.id}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {data.name}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {
                        data.payment === 'paid' ?
                            <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">
                                    Оплачено
                                </span>
                            </span>
                            :
                            <span
                                className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span className="relative">
                                    Ожидается оплата
                                </span>
                            </span>
                    }

                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {data.total}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {
                        data.status === 'delivered' ?
                            <span
                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">
                                    Доставлен
                                </span>
                            </span>
                            :
                            data.status === 'progress' ?
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                    <span className="relative">
                                        Ожидается оплата
                                    </span>
                                </span>
                                :
                                data.status === 'packed' ?
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Собран</span>
                                    </span>
                                    :
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative">В пути</span>
                                    </span>
                    }
                </td>
            </tr>
        </>
    )
}

export default Row