# E-commerce Data-warehouse

> E-commerce Data-warehouse is constructed around the data of the shopping mall, and there are three main parts: data collection, data warehouse modeling, and workflow establishment. In data collection part, this project builds separate pipelines for user log data and business data by using technologies like Flume, Kafka, Maxwell and DataX. In data warehouse modeling phase, the projects divides the entire data warehouse into five parts and uses Hive on Spark to operate data from HDFS. Finally, the project uses DolphinScheduler to create a DAG workflow for the cluster to work. 

### Technology selection

| Linux| JDK | Hadoop | Flume  | Kafka | Zookeeper | Hive | Spark| DataX | MaxWell | DolphinScheduler|
|:-----:| :-----:| :----: | :----: | :-----:| :----: | :----: | :-----:| :----: | :----: |:----:|
| CentOS 7|8u212 | 3.1.3 | 1.9.0 | 2.11-2.4.1 | 3.5.7 | 3.1.2 | 3.0.0 |  | 1.29.2 | 1.3.9|


## System modules and architecture

![](https://github.com/harry-gao37/E-commerce-Data-warehouse/blob/master/Data_Flow.png)


## Data Collection

As for the data collection part, we need to collect not only user log data like  but also business data such as . 

For user log data, this project firstly use flume to collect user behavior log from web, use kafka to put the data with the same catagory into the same queue, then one flume will consume transmitted data and load them to HDFS.

![](https://github.com/harry-gao37/E-commerce-Data-warehouse/blob/master/user_behavior_log.png)


For business data, since business data have already stored in MySQL, we need to read data from MySQL to HDFS. According to whether it is new data or not, we divide the tables into two types: full scale tables which and incremental tables that. For full scale tables, we only need to use DataX. For incremental tables, we need to use Maxwell first to , and then use kafka and flume to put the data into same category. Finally, all data will be temporarily stored in HDFS. 

![](https://github.com/harry-gao37/E-commerce-Data-warehouse/blob/master/Business_data_collection.png)

## Data Warehouse Design

we use Hive on Spark is because it is compatible with more ecosystem technologies. Dimensional Modeling Theory

![](https://github.com/harry-gao37/E-commerce-Data-warehouse/blob/master/data_warehouse_design.png)


