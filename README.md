
# README: Terminologies and Their Importance in Misinformation Propagation Analysis

This document explains the key terminologies used in the analysis of misinformation propagation, their significance, and how to interpret high or low values for each metric.

## 1. Misinformation Propagation Rate (MPR)
MPR measures how much misinformation changes as it propagates between nodes in the network. It is calculated for three different comparisons:

- **MPR I0**: Measures the difference between NodeX (source node) and Node0 (the original node).
- **MPR I1**: Measures the difference between Node0 and the auditor's answers (truth).
- **MPR I2**: Measures the difference between NodeX and the auditor's answers (truth).

### High vs Low Values:
- **Low MPR (close to 0)**: Indicates that the information remains consistent as it moves between nodes, showing minimal change or misinformation spread.
- **High MPR**: Suggests that the information has been significantly altered or distorted as it moves between nodes, implying a high level of misinformation spread.

### Importance for the Study:
MPR is crucial because it helps us identify how much information gets distorted as it travels through the network. It can highlight nodes or parts of the network where misinformation is amplified or corrected, allowing researchers to pinpoint problematic areas or key points of misinformation propagation.

## 2. Taxonomy Analysis
Taxonomy Analysis categorizes the type of misinformation based on the magnitude of the MPR values. The categories are:

- **Factual Error**: Minor misinformation (|MPR| ≤ 1) that typically results from small inaccuracies.
- **Lie**: Moderate misinformation (1 < |MPR| ≤ 3), where the information is misleading but still recognizable.
- **Propaganda**: Severe misinformation (|MPR| > 3), where the information has been heavily distorted or fabricated.

### High vs Low Values:
- **Factual Error**: Indicates minor deviations that don't drastically alter the meaning of the information.
- **Lie**: Represents more significant deviations that could mislead readers or viewers.
- **Propaganda**: Reflects extreme changes, often intended to deceive or manipulate.

### Importance for the Study:
Taxonomy Analysis is important because it classifies the type of misinformation based on its severity. By identifying whether the misinformation is a factual error, a lie, or propaganda, researchers can determine the level of risk associated with different parts of the network and focus on mitigating the most severe cases.

## 3. ANOVA (Analysis of Variance)
ANOVA is used to analyze the differences between the means of groups and assess whether those differences are statistically significant. It breaks down the variance into two parts:

- **Within-group variance**: Measures how much the data points vary within a single group (e.g., within NodeX or within Node0).
- **Between-group variance**: Measures how much the means of different groups (e.g., NodeX, Node0, auditor) differ from each other.

### High vs Low Values:
- **High within-group variance**: Indicates a lot of variability within the group, suggesting that the nodes in the group handle the information inconsistently. High within-group variance means that misinformation is more variable within the group.
- **Low within-group variance**: Suggests consistency within the group, where the misinformation index remains stable across nodes.
- **High between-group variance**: Suggests that there are significant differences between the groups, meaning that different groups (e.g., NodeX, Node0, auditor) have very different levels of misinformation.
- **Low between-group variance**: Suggests that the groups are similar in terms of misinformation propagation, meaning that nodes, the reference, and the auditor show similar patterns.

### Importance for the Study:
ANOVA is important because it helps quantify the differences in misinformation between nodes and groups. It shows whether certain groups of nodes are more prone to spreading misinformation and whether there are meaningful differences in how misinformation propagates across different sections of the network. It also highlights inconsistencies in how nodes handle the same information, providing insight into the reliability of different sections of the network.

## 4. Overall Mean
The Overall Mean represents the average level of misinformation deviation across the network for a specific group (e.g., NodeX, Node0, or auditor).

### High vs Low Values:
- **High Overall Mean**: Indicates a higher level of misinformation present on average in the group.
- **Low Overall Mean**: Indicates that the group has less misinformation, and the deviation from the truth is smaller.

### Importance for the Study:
The overall mean helps researchers gauge the general level of misinformation across nodes or comparisons. It provides a simple but effective measure of how much misinformation exists in the system, making it easier to compare different groups or ranges.

## 5. Group Means
Group Means show the average misinformation index for a specific group of nodes (e.g., within a specific range or between NodeX and the auditor).

### High vs Low Values:
- **High Group Means**: Suggest that the average misinformation for that group is significant, meaning that the group is prone to amplifying misinformation.
- **Low Group Means**: Suggest that the group is more reliable and produces less misinformation.

### Importance for the Study:
Group means allow researchers to compare different parts of the network and assess which sections or ranges are more likely to spread misinformation. Higher group means indicate areas where misinformation is more prevalent, while lower means suggest more reliable or accurate information.

## 6. Within-group Variance
Within-group variance measures how much the data points within a single group (e.g., a range of nodes) vary from the group's mean.

### High vs Low Values:
- **High within-group variance**: Indicates a wide range of misinformation within the group, meaning that some nodes are spreading more misinformation than others. This suggests inconsistency in the handling of information within the group.
- **Low within-group variance**: Indicates that the misinformation index is stable within the group, meaning that all nodes are handling the information in a similar way.

### Importance for the Study:
Within-group variance helps researchers understand the consistency of information handling within a group. High within-group variance suggests that the group is unreliable and contains nodes that spread misinformation unevenly, while low within-group variance suggests stability and reliability within the group.

## 7. Between-group Variance
Between-group variance measures how much the means of different groups differ from each other.

### High vs Low Values:
- **High between-group variance**: Indicates that the groups (e.g., NodeX, Node0, and auditor) are significantly different from each other in terms of misinformation. This suggests that one group is spreading much more or much less misinformation than the others.
- **Low between-group variance**: Indicates that the groups are similar, meaning that the levels of misinformation are consistent across NodeX, Node0, and the auditor.

### Importance for the Study:
Between-group variance is crucial for understanding whether different groups in the network handle information similarly or differently. High between-group variance suggests that some parts of the network are spreading more misinformation than others, while low variance indicates that misinformation is spread evenly across groups.



---------------------------------------------------------------------------


# Misinformation Analysis Workflow

This document explains how misinformation propagation analysis is conducted across three different file structures:

1. `newdomainX.json`
2. `allfilesWithinRange.json`
3. `allSameNewsAcrossRange.json`

## 1. `newdomainX.json` Structure

This file is the raw input data that stores information about the nodes and their corresponding misinformation analysis.

### Key Components:

- **Node**: Each node contains the following information:
  - **id**: Unique identifier for the node.
  - **prompt**: Behavior or personality linked to the node.
  - **articles**: Articles processed by the node, which contain:
    - **infoId**: Article identifier.
    - **content**: Content as rewritten by the node.
    - **nodeXAnswers**: Array of yes/no answers generated by this node (1 for Yes, 0 for No).
    - **node0Answers**: Array of yes/no answers from the original source node (Node0).
    - **auditorAnswers**: Array of yes/no answers from an external auditor/fact-checker.
    - **misInformationIndexArray**: Contains three misinformation indices:
      - **I0**: Misinformation index between nodeXAnswers and node0Answers.
      - **I1**: Misinformation index between node0Answers and auditorAnswers.
      - **I2**: Misinformation index between nodeXAnswers and auditorAnswers.
    - **dynamicMisinformationIndex**: Tracks factual errors, lies, and propaganda over time.
    - **misInformationPropagationRate**: Rate at which misinformation propagates through neighbors.
    - **taxonomyAnalysis**: Categorizes the content as factual errors, lies, or propaganda.
    - **inflectionPoint**: Where misinformation starts to rise significantly.
    - **sender**: ID of the node that sent this information to the current node.
  - **neighbors**: List of neighbor node IDs connected to this node.

### Purpose:

`newdomainX.json` serves as the foundational data source, containing the raw results and nodes’ interactions. The data here are used to calculate propagation rates, misinformation indices, and other statistical insights.

## 2. `allfilesWithinRange.json` Structure

This file contains processed results from the `newdomainX.json` file. It calculates various metrics such as Misinformation Propagation Rate (MPR), Taxonomy Analysis, and ANOVA results.

### Key Components:

- **Range**: Each range (e.g., `"1-30"`) indicates the start and end nodes being analyzed.
- **Prompt**: The personality or prompt associated with the nodes in the range.
- **Calculations**:
  - **For each news file** (e.g., `"crime-0"`), three key comparisons are performed:
    1. **Node0_to_NodeFirst**: Calculation between Node 0 and the first node in the range.
    2. **Node0_to_NodeLast**: Calculation between Node 0 and the last node in the range.
    3. **NodeFirst_to_NodeLast**: Calculation between the first node and the last node in the range.

### Calculations Performed:

1. **Misinformation Propagation Rate (MPR)**: Measures how misinformation propagates between nodes. Calculated as the difference in misinformation index between the target and source node divided by the number of edges:
   \[
   \text{MPR} = \frac{\text{DMI}_\text{target} - \text{DMI}_\text{source}}{\text{edges}}
   \]
   - Calculated for **I0**, **I1**, and **I2**.

2. **Taxonomy Analysis**: Categorizes the misinformation as **Factual Error**, **Lie**, or **Propaganda** based on the value of the MPR.

3. **ANOVA Results**: Analysis of Variance (ANOVA) compares groups to calculate variance between them:
   - **GroupMeans**: The mean DMI values for each node or comparison.
   - **WithinGroupVariance**: Variance within each node group.
   - **BetweenGroupVariance**: Variance between different node groups.

4. **DMISeries**: The Dynamic Misinformation Index (DMI) progression over time, showing how the misinformation indices (**I0**, **I1**, **I2**) change across all nodes within a range.

5. **allNewsAnovaResults**: Compares **all news files** within a range using ANOVA:
   - **ANOVA I0**, **ANOVA I1**, and **ANOVA I2** represent the analysis of variance for each misinformation index across the range.

### Purpose:

This file structures and processes the raw data into meaningful statistical insights, analyzing how misinformation propagates between nodes and across different time steps.

## 3. `allSameNewsAcrossRange.json` Structure

This file performs between-group variance analysis for **news files across multiple ranges** and **all news files globally**. It looks for patterns of misinformation propagation across different sections of the network.

### Key Components:

- **Between Range ANOVA Results**: Compares the same news file across different ranges.
  - **anovaI0**, **anovaI1**, and **anovaI2** are ANOVA results comparing DMI values for **I0**, **I1**, and **I2** across multiple ranges.
  
- **Global Between Group ANOVA Results**: Compares all news files across all ranges to detect global trends in misinformation propagation.

### Calculations Performed:

1. **Between-Range ANOVA**: Compares how misinformation spreads for a specific news item (e.g., `"crime-0"`) across different ranges. The goal is to analyze whether the same news propagates differently in various network sections.
   - **GroupMeans**: DMI values (extracted from **DMISeries**).
   - **WithinGroupVariance**: Variance within each range.
   - **BetweenGroupVariance**: Variance between different ranges for the same news.

2. **Global Between-Group ANOVA**: Performs a global analysis of misinformation across all news and all ranges to identify network-wide trends. It calculates:
   - **Global GroupMeans**: DMI values across all ranges.
   - **WithinGroupVariance**: Variance within each group across all news.
   - **BetweenGroupVariance**: Variance between different groups of news across the network.

### Purpose:

This file helps to understand how misinformation spreads at a higher level, both for individual news files across multiple ranges and for all news files across the entire network.

## Relationship Between the Files:

### Flow of Information:

1. **Raw Data (`newdomainX.json`)**:
   - Stores nodes, their misinformation indices, and interactions.

2. **Processed Results (`allfilesWithinRange.json`)**:
   - Takes the raw data from `newdomainX.json` and calculates:
     - Misinformation Propagation Rate (MPR)
     - Taxonomy Analysis
     - ANOVA Results (comparison between nodes)
     - Dynamic Misinformation Index (DMI) Series
   - It provides detailed insights for each range and node comparison.

3. **Between Group Variance Results (`allSameNewsAcrossRange.json`)**:
   - Compares the same news across multiple ranges to find patterns in how misinformation propagates.
   - Provides a global view by comparing all news files and ranges across the network, identifying larger trends in the network’s misinformation dynamics.

### Key Relationships:

- The **DMISeries** in `allfilesWithinRange.json` forms the basis for **ANOVA analysis** both within the range (in the same file) and across multiple ranges (in `allSameNewsAcrossRange.json`).
- The **Misinformation Indices (I0, I1, I2)** from `newdomainX.json` are used to calculate the **Misinformation Propagation Rate (MPR)** and perform the **Taxonomy Analysis**.
- **allNewsAnovaResults** in `allfilesWithinRange.json` compares all news files within a range, while **Between Range ANOVA** in `allSameNewsAcrossRange.json` compares the same news across different ranges.


# File Structure Schemas

## 1. `newdomainX.json` Structure

This file contains the raw data for misinformation analysis, with nodes, their respective article rewrites, and various misinformation indices.

### Schema:

```
{
  "nodes": [
    {
      "id": "Integer",               // Unique identifier for the node
      "prompt": "String",            // The personality or behavior associated with the node
      "articles": [
        {
          "infoId": "String",        // Unique identifier for the article processed by this node
          "content": "String",       // The article content as rewritten by the node
          "nodeXAnswers": "Array",   // Array of yes/no answers generated by this node (1 for Yes, 0 for No)
          "node0Answers": "Array",   // Array of yes/no answers from the original source node (Node0)
          "auditorAnswers": "Array", // Array of yes/no answers from an external auditor/fact-checker
          "questions": "Array",      // List of questions answered by the node
          "misInformationIndexArray": {
            "I0": "Integer",         // Misinformation index between NodeX and Node0
            "I1": "Integer",         // Misinformation index between Node0 and Auditor
            "I2": "Integer"          // Misinformation index between NodeX and Auditor
          },
          "dynamicMisinformationIndex": {
            "factualErrors": "Integer",   // Count of factual errors (small deviations)
            "lies": "Integer",            // Count of lies (medium deviations)
            "propaganda": "Integer"       // Count of propaganda (large deviations)
          },
          "misInformationPropagationRate": "Float",  // Rate at which misinformation propagates through the node's neighbors
          "taxonomyAnalysis": {
            "factualErrors": "Integer",   // Classification of factual errors in the content
            "lies": "Integer",            // Classification of lies in the content
            "propaganda": "Integer"       // Classification of propaganda in the content
          },
          "inflectionPoint": "Integer",   // Time step or node depth where misinformation starts to rise significantly
          "sender": "Integer"             // The ID of the node that sent this information to the current node
        }
      ],
      "neighbors": "Array"                // List of neighbor node IDs connected to this node
    }
  ],
  "edges": [
    {
      "source": "Integer",                // Source node ID
      "target": "Integer"                 // Target node ID
    }
  ],
  "neighborRanges": [
    ["Integer", "Integer"]                // Pairs indicating ranges of neighbors
  ]
}
```

## 2. `processed_results_with_new_comparision.json` Structure

This file contains the processed data that compares all news files within a range,

### Schema:

```
{
  "range": "1-30",  // Range of nodes being analyzed (start-end)
  "prompt": "String",  // Contextual prompt for this range
  "calculations": {
    "news-file-name": {  // The name of the news file (e.g., "crime-0")
      "Node0_to_NodeFirst": {  // Analysis between Node0 and the first node in the range
        "Misinformation Propagation Rate": {
          "mprI0": "number",  // MPR for misinformation index I0
          "mprI1": "number",  // MPR for misinformation index I1
          "mprI2": "number"   // MPR for misinformation index I2
        },
        "Taxonomy Analysis": {  // Categorization of misinformation type
          "I0": "Factual Error/Lie/Propaganda",  // Taxonomy based on I0
          "I1": "Factual Error/Lie/Propaganda",  // Taxonomy based on I1
          "I2": "Factual Error/Lie/Propaganda"   // Taxonomy based on I2
        },
        "ANOVA Results": {  // ANOVA analysis for comparison of groups
          "anovaI0": {
            "overallMean": "number",  // Overall mean for I0
            "groupMeans": ["number"],  // Group means for each I0 value
            "withinGroupVariance": "number",  // Variance within groups for I0
            "betweenGroupVariance": "number"  // Variance between groups for I0
          },
          "anovaI1": {
            "overallMean": "number",  // Overall mean for I1
            "groupMeans": ["number"],  // Group means for each I1 value
            "withinGroupVariance": "number",  // Variance within groups for I1
            "betweenGroupVariance": "number"  // Variance between groups for I1
          },
          "anovaI2": {
            "overallMean": "number",  // Overall mean for I2
            "groupMeans": ["number"],  // Group means for each I2 value
            "withinGroupVariance": "number",  // Variance within groups for I2
            "betweenGroupVariance": "number"  // Variance between groups for I2
          }
        }
      },
      "Node0_to_NodeLast": {  // Analysis between Node0 and the last node in the range
        "Misinformation Propagation Rate": {
          "mprI0": "number",
          "mprI1": "number",
          "mprI2": "number"
        },
        "Taxonomy Analysis": {
          "I0": "Factual Error/Lie/Propaganda",
          "I1": "Factual Error/Lie/Propaganda",
          "I2": "Factual Error/Lie/Propaganda"
        },
        "ANOVA Results": {
          "anovaI0": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          },
          "anovaI1": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          },
          "anovaI2": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          }
        }
      },
      "NodeFirst_to_NodeLast": {  // Analysis between the first and last nodes in the range
        "Misinformation Propagation Rate": {
          "mprI0": "number",
          "mprI1": "number",
          "mprI2": "number"
        },
        "Taxonomy Analysis": {
          "I0": "Factual Error/Lie/Propaganda",
          "I1": "Factual Error/Lie/Propaganda",
          "I2": "Factual Error/Lie/Propaganda"
        },
        "ANOVA Results": {
          "anovaI0": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          },
          "anovaI1": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          },
          "anovaI2": {
            "overallMean": "number",
            "groupMeans": ["number"],
            "withinGroupVariance": "number",
            "betweenGroupVariance": "number"
          }
        }
      },
      "DMISeries": {  // Dynamic Misinformation Index progression over time
        "I0": ["number"],  // Series of I0 values for the entire range
        "I1": ["number"],  // Series of I1 values for the entire range
        "I2": ["number"]   // Series of I2 values for the entire range
      },
      "allNewsAnovaResults": {  // ANOVA results comparing all news within the range
        "ANOVA I0": {
          "overallMean": "number",
          "groupMeans": ["number"],
          "withinGroupVariance": "number",
          "betweenGroupVariance": "number"
        },
        "ANOVA I1": {
          "overallMean": "number",
          "groupMeans": ["number"],
          "withinGroupVariance": "number",
          "betweenGroupVariance": "number"
        },
        "ANOVA I2": {
          "overallMean": "number",
          "groupMeans": ["number"],
          "withinGroupVariance": "number",
          "betweenGroupVariance": "number"
        }
      }
    }
  }
}
```

## 3. `allSameNewsAcrossRange.json` Structure

This file contains the processed data that compares the same news across different ranges.

### Schema:

```
{
  "crime-0": {
    "Between Range ANOVA Results": {
      "anovaI0": {
        "overallMean": 2.5,
        "groupMeans": [2.0, 3.0],  // DMI values from different ranges
        "withinGroupVariance": 0.5,
        "betweenGroupVariance": 1.0
      },
      "anovaI1": { ... },
      "anovaI2": { ... }
    }
  },
  "education-0": {
    "Between Range ANOVA Results": {
      "anovaI0": {
        "overallMean": 1.8,
        "groupMeans": [1.5, 2.1],
        "withinGroupVariance": 0.3,
        "betweenGroupVariance": 0.4
      },
      "anovaI1": { ... },
      "anovaI2": { ... }
    }
  },
  "Global": {
    "Global Between Group ANOVA Results": {
      "anovaI0": {
        "overallMean": 2.3,
        "groupMeans": [2.0, 2.6],
        "withinGroupVariance": 0.4,
        "betweenGroupVariance": 0.6
      },
      "anovaI1": { ... },
      "anovaI2": { ... }
    }
  }
}
```