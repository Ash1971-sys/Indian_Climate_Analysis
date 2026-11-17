# 🇮🇳 Indian Climate Analysis Platform

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-black?logo=express&logoColor=white)](https://expressjs.com/)
[![Python](https://img.shields.io/badge/Python-3.8%2B-3776ab?logo=python&logoColor=white)](https://www.python.org/)
[![D3.js](https://img.shields.io/badge/D3.js-7.9.0-f9a03c?logo=d3.js&logoColor=white)](https://d3js.org/)
[![Plotly](https://img.shields.io/badge/Plotly.js-3.0.1-3f4f75?logo=plotly&logoColor=white)](https://plotly.com/javascript/)
[![Project](https://img.shields.io/badge/Type-Individual_Project-blueviolet)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An independent, interactive full-stack geospatial climate analytics and passive building design platform covering **700+ districts across India**.

Developed by **Divyansh Vijay**, this project combines a high-performance React/Vite web application, a Node.js/Express API backend, and an advanced Python bioclimatic analysis engine to deliver intuitive district-level climate intelligence, psychrometric visualizations, and verified meteorological dataset downloads.

---

## 🌟 Overview & Motivation

India is characterized by diverse climatic regimes—ranging from extreme cold in high-altitude northern regions to hot-arid western zones, temperate central plateaus, composite plains, and warm-humid coastal belts. Designing energy-efficient, climate-responsive buildings requires precise, district-specific meteorological data.

The **Indian Climate Analysis Platform** bridges the gap between raw meteorological databases and practical building design. It offers:
- Fast, interactive district-level geospatial navigation.
- Comprehensive climate analytics including dry bulb/wet bulb temperatures, relative humidity, solar radiation components, wind profiles, and ground temperatures.
- Dynamic bioclimatic psychrometric charts with passive cooling and heating strategy evaluations (natural ventilation, thermal mass, evaporative cooling, passive solar heating).
- Direct downloads of verified weather data in **EPW**, **BINM**, and **CSV** formats for building performance simulations (EnergyPlus, DesignBuilder, IDA ICE, etc.).

---

## 🚀 Key Features

### 1. Interactive Geospatial Explorer
- Detailed SVG/D3-powered choropleth map of India with smooth hover inspection, district search, and boundary highlighting.
- Immediate retrieval of local climate zone classifications based on building thermal performance criteria.

### 2. Multi-Variable District Climate Analytics
- **Weather Summary Tables**: Minimum, mean, and maximum dry-bulb temperatures, wet-bulb depressions, global/direct/diffuse radiation, and air velocities.
- **Monthly Distribution Violin Plots**: High-density kernel density estimates (KDE) and box-plot distributions of temperature and radiation ranges throughout the year.
- **Hourly Colormap Heatmaps**: 8,760-hour matrices mapping temperature, humidity, and radiation fluctuations across diurnal and seasonal cycles.
- **Wind Velocity Profiles**: Monthly wind speed distributions and prevailing wind patterns.
- **Ground Temperature Analysis**: Seasonal subsurface temperature curves for geo-exchange and foundation thermal assessment.

### 3. Bioclimatic & Psychrometric Analysis Engine
- Interactive psychrometric charts with adaptive thermal comfort boundaries.
- Real-time overlay of passive design strategies to identify passive heating/cooling potential for any chosen district.

### 4. Direct Weather Data Export
- One-click downloads for verified district meteorological datasets:
  - **EPW** (EnergyPlus Weather format for building energy modeling)
  - **BINM** (Bin data for rapid HVAC load estimation)
  - **CSV** (Tabular hourly metrics for custom data science workflows)

---

## 🏗️ System Architecture

```
Indian_Climate_Analysis/
├── frontend/                     # React + Vite Client Application
│   ├── src/
│   │   ├── IndiaMap.jsx          # Interactive D3/GeoJSON India map component
│   │   ├── IndiaMapMobile.jsx    # Responsive mobile-optimized map
│   │   ├── SummaryTable.jsx      # District meteorological summary tables
│   │   ├── TemperatureViolinPlot.jsx # Monthly temperature KDE violin plots
│   │   ├── RadiationViolinPlot.jsx   # Solar radiation distributions
│   │   ├── WindVelocityViolinPlot.jsx # Wind velocity distributions
│   │   ├── HourlyColormapPlot.jsx    # 8760-hour heatmap visualization
│   │   ├── VerticalNavbar.jsx    # Collapsible sidebar navigation
│   │   ├── About.jsx             # Project mission, developer profile & references
│   │   ├── HowToUse.jsx          # Step-by-step user guide
│   │   └── App.jsx               # Main state orchestration & routing
│   ├── public/                   # Static assets, GeoJSON maps & illustrations
│   └── package.json
│
├── backend/                      # Node.js + Express API Server
│   ├── app.js                    # Server entrypoint and route mounting
│   ├── controllers/              # Business logic & climate data processors
│   │   ├── epwController.js      # EPW file retrieval and streaming
│   │   ├── radiationController.js# Solar radiation metric calculations
│   │   ├── temperatureController.js # Temperature distribution analytics
│   │   ├── windController.js     # Wind velocity data handlers
│   │   ├── groundTempController.js # Subsurface temperature calculations
│   │   ├── hourlyColormapController.js # Heatmap matrix generators
│   │   ├── psychrometryController.js # Bioclimatic strategy calculations
│   │   └── summaryController.js  # District summary aggregations
│   ├── file_mappings/            # Google Drive file ID mappings (EPW, BIN, CSV)
│   └── package.json
│
├── python/                       # Advanced Bioclimatic & Passive Design Tools
│   ├── Passive_Design_Consultant.py # Desktop GUI (PyQt5) for bioclimatic analysis
│   ├── passive_backend.py        # Passive strategy calculations
│   ├── psychrolib.py             # Precise thermodynamic psychrometric functions
│   ├── chart.py & chartdata.py   # Psychrometric chart rendering algorithms
│   └── requirements.txt          # Python dependencies
│
├── design_conditions(3).xlsx     # Consolidated district design conditions dataset
├── Poster.pdf                    # Project presentation poster
├── Poster.pptx                   # Editable poster slides
└── README.md                     # Platform documentation
```

---

## 📸 Visual Showcase

| Visualization | Description | Application Section |
|:---:|:---:|:---:|
| ![Home](frontend/public/Home.png) | Interactive District Map & Climate Zone Explorer | Landing / Home Page |
| ![Weather_File_Summary](frontend/public/Weather_File_Summary.png) | Key Meteorological Indices & Summary Statistics | District Analysis |
| ![Temperature_Range](frontend/public/Temperature_Range.png) | Monthly Dry Bulb & Wet Bulb Temperature Violin Distributions | Temperature Profile |
| ![Radiation_Range](frontend/public/Radiation_Range.png) | Monthly Global Horizontal & Diffuse Solar Radiation | Solar Radiation Profile |
| ![Wind_velocity](frontend/public/Wind_velocity.png) | Monthly Wind Speed Distributions | Wind Analytics |
| ![HourlyColormap](frontend/public/HourlyColormap.png) | 8,760-Hour Diurnal/Seasonal Heatmap Colormap | Microclimate Heatmaps |
| ![Biolclimatic_Chart](frontend/public/Biolclimatic_Chart.png) | Interactive Bioclimatic Psychrometric Strategy Chart | Passive Design Consultant |
| ![Ground_Temeprature](frontend/public/Ground_Temeprature.png) | Monthly Subsurface Ground Temperature Depth Profiles | Ground Temperatures |
| ![download_tab](frontend/public/download_tab.png) | One-Click EPW, BINM, and CSV Weather Data Downloads | Data Downloads |

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, D3.js, Plotly.js, React-Feather, Bootstrap 5, TopoJSON/GeoJSON
- **Backend API**: Node.js, Express, Axios, XLSX, Google APIs
- **Python Engine**: PsychroLib, PyQt5, NumPy, SciPy, Matplotlib
- **Data Formats**: EPW (EnergyPlus Weather), BINM (Bin Meteorological), CSV, GeoJSON

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or newer recommended)
- [Python](https://www.python.org/) (v3.8 or newer)
- [Git](https://git-scm.com/)

---

### Installation & Local Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Ash1971-sys/Indian_Climate_Analysis.git
cd Indian_Climate_Analysis
```

#### 2. Start the Backend API Server
```bash
cd backend
npm install
node app.js
```
The backend server runs on `http://localhost:3000` by default.

#### 3. Start the Frontend Application
In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

#### 4. Run the Python Bioclimatic Tools (Optional Desktop GUI)
In a separate terminal:
```bash
cd python
pip install -r requirements.txt
python Passive_Design_Consultant.py
```
This launches the standalone PyQt5 bioclimatic analysis desktop interface.

---

## 📡 API Overview

The Node.js/Express backend provides REST endpoints for district climate analytics:

| Endpoint | Method | Description |
|---|:---:|---|
| `/api/epw/:district` | `GET` | Streams the EPW weather file for the selected district |
| `/api/bin/:district` | `GET` | Streams the BINM bin weather file for the selected district |
| `/api/csv/:district` | `GET` | Streams the CSV hourly weather file for the selected district |
| `/api/summary/:district` | `GET` | Returns aggregated meteorological summary metrics |
| `/api/temperature/:district` | `GET` | Returns monthly temperature distribution data |
| `/api/radiation/:district` | `GET` | Returns monthly solar radiation metrics |
| `/api/wind/:district` | `GET` | Returns monthly wind velocity profiles |
| `/api/ground-temperature/:district` | `GET` | Returns depth-wise ground temperature curves |
| `/api/hourly-colormap/:district` | `GET` | Returns 8,760 hourly data arrays for heatmap generation |
| `/api/psychrometry/:district` | `GET` | Returns psychrometric coordinates and passive strategy data |

---

## 📚 Data Sources & References

### Meteorological Datasets
- **ISHRAE** — [Indian Society of Heating, Refrigerating and Air Conditioning Engineers](https://www.ishrae.in/)
- **ASHRAE** — [American Society of Heating, Refrigerating and Air-Conditioning Engineers](https://www.ashrae.org/)
- **COLBE** — [Climate and Outdoor Laboratory for Building Engineering](https://colbe.bath.ac.uk/)

### Scientific Reference & Methodology
The climate zone classification criteria and building thermal performance benchmarks implemented in this platform reference published scientific research:
> **R. Gupta, J. Mathur, and V. Garg**, *"A criteria-based climate classification approach considering clustering and building thermal performance: Case of India"*, **Building and Environment**, vol. 270, p. 112512, 2025. [DOI: 10.1016/j.buildenv.2024.112512](https://doi.org/10.1016/j.buildenv.2024.112512)

---

## 👨‍💻 Creator & Developer

**Divyansh Vijay**  
*Creator & Lead Developer*  
- **Email**: [divyanshvijay92@gmail.com](mailto:divyanshvijay92@gmail.com)  
- **LinkedIn**: [divyansh-vijay](https://www.linkedin.com/in/divyansh-vijay-17187b227)  
- **GitHub**: [Ash1971-sys](https://github.com/Ash1971-sys)  

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed for academic, research, and non-commercial design use. See individual file headers for underlying libraries (e.g. PsychroLib).
