
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
