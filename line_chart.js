const fs = require('fs');
const path = require('path');

// Function to read the JSON file
function readJSONFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Function to process the data and aggregate Misinformation Propagation Rate from each range for each domain
function processFile(data) {
  const result = {}; // This will store the transformed data

  // Loop through each range (e.g., 1-30)
  Object.entries(data).forEach(([range, rangeData]) => {
    // Loop through each domain within the range
    Object.entries(rangeData.calculations).forEach(([domain, domainData]) => {
      // Initialize the domain in the result object if it doesn't exist
      if (!result[domain]) {
        result[domain] = {
          Node0_to_NodeFirst: [], // Initialize empty arrays to accumulate data
          Node0_to_NodeLast: [],
          NodeFirst_to_NodeLast: [],
        };
      }

      // Extract the relevant data from domainData
      const { Node0_to_NodeFirst, Node0_to_NodeLast, NodeFirst_to_NodeLast } = domainData;

      // Extract only Misinformation Propagation Rate from Node0_to_NodeFirst and push it into the array
      if (Node0_to_NodeFirst?.["Misinformation Propagation Rate"]) {
        result[domain].Node0_to_NodeFirst.push(Node0_to_NodeFirst["Misinformation Propagation Rate"]);
      }

      // For the other fields, just push the entire object into the array
      result[domain].Node0_to_NodeLast.push(Node0_to_NodeLast["Misinformation Propagation Rate"]);
      result[domain].NodeFirst_to_NodeLast.push(NodeFirst_to_NodeLast["Misinformation Propagation Rate"]);
    });
  });

  return result;
}

// Function to write the result back to a new JSON file
function writeJSONFile(outputFilePath, data) {
  fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
  console.log(`Results written to ${outputFilePath}`);
}

// Main function to handle the process
function main() {
  const inputFilePath = path.join(__dirname, '/controlled_random/analysis/','allfilesWithinRange.json'); // Path to your input JSON file
  const outputFilePath = path.join(__dirname, '/controlled_random/analysis/lineChart.json'); // Path for the output JSON file

  // Read the input file
  const inputData = readJSONFile(inputFilePath);

  // Process the file and extract the required data
  const result = processFile(inputData);

  // Write the result to an output file
  writeJSONFile(outputFilePath, result);
}

// Execute the main function
main();
