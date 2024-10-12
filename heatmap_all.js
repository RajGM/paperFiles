const fs = require('fs');
const path = require('path');

// Directory containing the domain-news JSON files
const jsonDirSameAgents = path.join(__dirname, './same_agents/json/');
const jsonDirControlledRandom = path.join(__dirname, './controlled_random/json/');

// List of agents for controlled random
const agents = require('./agents'); 

// Function to extract neighbor ranges from the first available file
const getNeighborRanges = (jsonDir) => {
    const firstFile = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'))[0];
    const filePath = path.join(jsonDir, firstFile);
    
    // Read the first JSON file to get neighborRanges
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    
    return jsonData?.neighborRanges || [];
};

// Function to extract all available domains from the files
const getAllDomains = (jsonDir) => {
    return fs.readdirSync(jsonDir).filter(file => file.endsWith('.json')).map(file => path.basename(file, '.json'));
};

// Function to get agent name based on prompt
const getAgentNameByPrompt = (prompt) => {
    const agent = agents.find(agent => agent.prompt === prompt);
    return agent ? agent.name : 'Unknown'; // Return 'Unknown' if no matching agent is found
};

// Function to extract misInformationIndexArray and agent sequence from the domain-news JSON files for the specified ranges
const extractMisinformationIndex = (neighborRanges, allDomains, jsonDir, isControlledRandom = false) => {
    const result = {};

    // Iterate over each range from neighborRanges
    neighborRanges.forEach(([start, end]) => {
        const range = `${start}-${end}`;
        result[range] = { domains: {}, namesInSequence: [] };

        allDomains.forEach(domain => {
            const filePath = path.join(jsonDir, `${domain}.json`);

            // Check if the file exists
            if (!fs.existsSync(filePath)) return;

            // Read the domain-news JSON file
            const fileData = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(fileData);

            // Extract misInformationIndexArray for the specified index range (start to end)
            const misInformationIndexArray = jsonData?.nodes
                .slice(start, end + 1)  // Access nodes by their index using slice
                .map((node) => node.articles[0]?.misInformationIndexArray || []);

            const prompt = jsonData.nodes[start]?.prompt;

            // Add the data to the result object
            if (!result[range].prompt) result[range].prompt = prompt;
            result[range].domains[domain] = misInformationIndexArray;

            // If in controlled random mode, build the namesInSequence array
            if (isControlledRandom) {
                const agentNames = jsonData.nodes.slice(start, end + 1).map(node => {
                    const agentName = getAgentNameByPrompt(node.prompt);
                    return agentName;
                });
                result[range].namesInSequence = agentNames; // Store the sequence of agent names for the range
            }
        });
    });

    return result;
};

// Save the result to a new file
const saveResultToFile = (result, outputFile) => {
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
    console.log(`Data saved to ${outputFile}`);
};

// Get neighbor ranges and domains for same_agents
const neighborRangesSameAgents = getNeighborRanges(jsonDirSameAgents);
const allDomainsSameAgents = getAllDomains(jsonDirSameAgents);

// Extract data for same_agents and save
const extractedDataSameAgents = extractMisinformationIndex(neighborRangesSameAgents, allDomainsSameAgents, jsonDirSameAgents);
const outputFileSameAgents = path.join(__dirname,'same_agents/analysis/' ,'extracted_data_same_agents.json');
saveResultToFile(extractedDataSameAgents, outputFileSameAgents);

// Get neighbor ranges and domains for controlled_random
const neighborRangesControlledRandom = getNeighborRanges(jsonDirControlledRandom);
const allDomainsControlledRandom = getAllDomains(jsonDirControlledRandom);

// Extract data for controlled_random with namesInSequence and save
const extractedDataControlledRandom = extractMisinformationIndex(
    neighborRangesControlledRandom, 
    allDomainsControlledRandom, 
    jsonDirControlledRandom, 
    true // Indicate controlled random mode
);
const outputFileControlledRandom = path.join(__dirname, 'controlled_random/analysis/' ,'extracted_data_controlled_random.json');
saveResultToFile(extractedDataControlledRandom, outputFileControlledRandom);
