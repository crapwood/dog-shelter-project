// @ts-nocheck
// Function to convert the JSON(Array of objects) to CSV.
const arrayToCsv = (headers, data) => {
    const csvRows = [];
    // getting headers.
    const headerValues = headers.map((header) => header.label);
    csvRows.push(headerValues.join(",")); // Push into array as comma separated values
    // Getting rows.
    for (const row of data) {
        const rowValues = headers.map((header) => {
            const escaped = (`${row[header.key]}`).replace(/"/g, '\\"'); // To replace the unwanted quotes.
            return `"${escaped}"`; // To escape the comma in a address like string.
        });
        csvRows.push(rowValues.join(",")); // Push into array as comma separated values.
    }
    return csvRows.join("\n"); // To enter the next rows in the new line '\n'
};

// Function to download the generated CSV as a .csv file.
const download = (data, fileName) => {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden','');
    a.setAttribute('href', url);
    a.setAttribute('download',fileName + '.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const generateCSV = (header, data, filename) => {
    const csvData = arrayToCsv(header, data);
    const BOM = "\uFEFF";
    const csvContent = BOM + csvData;
    download(csvContent, filename);
};
