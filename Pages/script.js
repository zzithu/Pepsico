// script.js

// Sample data (In a future implementation, this will connect to an API with probably a key)
//to uniquely idenfity the user.
const data = [
    {
        name: "Pepsi",
        shippedLastMonth: 1000,
        forecastedNextMonth: 1200,
        ytdAverage: 1100
    },
    {
        name: "Mountain Dew",
        shippedLastMonth: 800,
        forecastedNextMonth: 950,
        ytdAverage: 875
    },
    {
        name: "N/A (Placeholder)",
        shippedLastMonth: -1,
        forecastedNextMonth: -1,
        ytdAverage: -1
    },
    // Add more entries as needed
];

// cleaner this way
function populateTable(data) {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = ""; // Clear any existing content

    data.forEach(entry => {
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.textContent = entry.name;
        row.appendChild(name);

        const preMonth = document.createElement("td");
        preMonth.textContent = entry.shippedLastMonth;
        row.appendChild(preMonth);

        const nextMonth = document.createElement("td");
        nextMonth.textContent = entry.nMonth;
        row.appendChild(nextMonth);

        const ytdAverage = document.createElement("td");
        ytdAverage.textContent = entry.ytdAverage;
        row.appendChild(ytdAverage);

        tableBody.appendChild(row);
    });
}

populateTable(data);
