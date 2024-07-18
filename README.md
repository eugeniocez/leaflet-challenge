# leaflet-challenge - USGS Earthquake Data Visualization Tools
Data Analytics Bootcamp Module 15 Challenge

## Overview

The United States Geological Survey (USGS) is dedicated to providing scientific data about natural hazards, the health of ecosystems and the environment, and the impacts of climate and land-use change. USGS scientists innovate by developing new methods and tools to supply timely, relevant, and useful information about Earth and its processes.

## Purpose

The USGS seeks to create a new set of tools for visualizing their extensive earthquake data. Despite collecting a massive amount of data from around the world daily, they currently lack a meaningful way to display this information. The goal of this project is to develop visualization tools that will help educate the public and other government organizations about various issues facing our planet. Effective visualization is also aimed at assisting the USGS in securing more funding by demonstrating the value and impact of their work.

## Objectives

1. **Develop Visualization Tools**: Create innovative and effective tools to visualize the earthquake data collected by USGS.
2. **Educate the Public and Organizations**: Use the visualization tools to better educate the public and other government organizations about natural hazards and environmental issues.
3. **Support Funding Efforts**: Demonstrate the importance and impact of USGS's work to secure more funding.

## Instructions

The instructions for this activity were broken into two parts:

### Part 1: Create the Earthquake Visualization

The first task was to visualize an earthquake dataset by completing the following steps:

1. **Get the dataset**:
    - Visited the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and chose a dataset to visualize.

2. **Import and visualize the data**:
    - Using Leaflet I created a map that plotted all the earthquakes from the dataset based on their longitude and latitude.
    - Used data markers to reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.
    - Included popups that provide additional information about the earthquake when its associated marker is clicked.
    - Created a legend that provides context for the map data.

## Files Used

The files used in the project can be found below:

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that contains the styles for the visualization.
- `logic.js`: The JavaScript file that contains the logic for fetching data, creating the map, and plotting the data.