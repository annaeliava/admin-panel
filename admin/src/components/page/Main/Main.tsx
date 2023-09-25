import { Chart } from "react-google-charts";

export const data = [
    ["Продажи", "%"],
    ["Косметика", 11],
    ["Еда", 2],
    ["Техника", 2],
    ["Мебель", 2],
    ["Лекарства", 7],
];

export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 1,
};

const Main = () => {
    return (
        <>
            <div>
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                    Главная
                </h2>
                <section className="flex flex-row items-center">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width={"fit-content"}
                        height={"400px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width={"fit-content"}
                        height={"400px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width={"fit-content"}
                        height={"400px"}
                    />
                </section>
                <section className="flex flex-row">
                    <Chart chartType="ColumnChart" width="100%" height="300px" data={data} />
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </section>
            </div>
        </>
    )
}

export default Main