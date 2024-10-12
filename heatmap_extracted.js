const fs = require('fs');
const path = require('path');

// Function to extract misInformationIndexArray from the domain-news JSON file for the specified indices
const extractMisinformationIndex = (inputData) => {
    const result = {};

    // Iterate over each range and corresponding domain-news files
    inputData.forEach(({ range, domains }) => {
        const [start, end] = range.split('-').map(Number);
        result[range] = {};

        domains.forEach((domainFile) => {
            const filePath = path.join(__dirname, './controlled_random/json/', `${domainFile}.json`);

            // Read the domain-news JSON file
            const fileData = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(fileData);

            // Extract misInformationIndexArray for the specified index range (start to end)
            const misInformationIndexArray = jsonData?.nodes
                .slice(start, end + 1)  // Access nodes by their index using slice
                .map((node) => node.articles[0]?.misInformationIndexArray || []);

            //const prompt =jsonData.nodes[start].prompt; 
            // Add the data to the result object
            console.log(misInformationIndexArray)
            //result[range].prompt = prompt;
            result[range][domainFile] = misInformationIndexArray;
        });
    });

    return result;
};

// Save the result to a new file
const saveResultToFile = (result, outputFile) => {
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
    console.log(`Data saved to ${outputFile}`);
};

// Define input ranges and domain files
//SAME AGENTS
// const inputData = [
//     { range: '1-30', domains: ['technology-0'] },
//     { range: '61-90', domains: ['education-1', 'politics-0','politics-1', 'technology-0'] },
//     { range: '121-150', domains: ['politics-1'] },
//     { range: '331-360', domains: ['technology-0'] },
//     { range: '361-390', domains: ['technology-0'] },
//     { range: '391-420', domains: ['crime-0'] },
//     { range: '511-540', domains: ['education-1'] },
//     { range: '541-570', domains: ['politics-1'] },
//     { range: '571-600', domains: ['technology-0','politics-0'] },
// ] // Input data structure

//9,14,20
//5,10,16,17,18,19

const inputData = [
    { range: '271-301', domains: ['education-0', 'education-2', 'crime-0'] },
    { range: '421-451', domains: ['crime-0', 'education-0'] },
    { range: '601-631', domains: ['technology-0'] },
    
    { range: '151-181', domains: ['politics-1'] },
    { range: '301-331', domains: ['politics-0'] },
    { range: '481-511', domains: ['politics-0'] },
    { range: '511-541', domains: ['politics-1'] },
    { range: '541-571', domains: ['politics-1'] },
    { range: '571-601', domains: ['politics-0'] }
  ]
   // Input data structure

const outputFile = path.join(__dirname, 'controlled_random_extracted_data_all_ranges.json');

// Run extraction
const extractedData = extractMisinformationIndex(inputData);
saveResultToFile(extractedData, outputFile);