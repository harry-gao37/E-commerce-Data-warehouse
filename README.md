# E-commerce Data-warehouse

> E-commerce Data-warehouse is constructed around the data of the shopping mall, and there are three main parts: data collection, data warehouse modeling, and workflow establishment. In data collection part, this project builds separate pipelines for user log data and business data by using technologies like Flume, Kafka, Maxwell and DataX. In data warehouse modeling phase, the projects divides the entire data warehouse into five parts and uses Hive on Spark to operate data from HDFS. Finally, the project uses DolphinScheduler to create a workflow for the cluster to work. 

### Technology selection

| JDK | Hadoop | Flume  | Kafka | Zookeeper | Hive | Spark| DataX | MaxWell | DolphinScheduler|
| :-----:| :----: | :----: | :-----:| :----: | :----: | :-----:| :----: | :----: |:----:|
| 8u212 | 3.1.3 | 1.9.0 | 2.11-2.4.1 | 3.5.7 | 3.1.2 | 3.0.0 |  | 1.29.2 | 1.3.9|

## Data Collection

As for the data collection part, we need to collect not only user log data like  but also business data such as . 

For user log data, this project 


For business data,



## Data Warehouse Design

The front-end part of the system uses the mainstream front-end framework Vue, uses Es6 development specifications, adopts a modular development model, builds the page environment using the Nuxt framework and vue-admin-template template, and uses Element-ui for page layout. In the front-end environment, Npm is used for dependency management, Babel is used for code conversion, Webpack is used for packaging of static resources, axios is used for Ajax request calls, and ECharts is used for data chart display.

## System modules and architecture

![](https://github.com/sbchengyiwei/guli-online-study-website/blob/main/System%20modules.png)
