#!/bin/bash

case $1 in
"start"){
        echo ================== start cluster ==================

        #启动 Zookeeper集群
        zk.sh start

        #启动 Hadoop集群
        myhadoop.sh start

        #启动 Kafka采集集群
        kf.sh start

        #启动 Flume采集集群
        f1.sh start

        #启动 Flume消费集群
        f2.sh start

        };;
"stop"){
        echo ================== stop cluster ==================

        #停止 Flume消费集群
        f2.sh stop

        #停止 Flume采集集群
        f1.sh stop

        #停止 Kafka采集集群
        kf.sh stop

        #停止 Hadoop集群
        myhadoop.sh stop

        #停止 Zookeeper集群
        zk.sh stop

};;
esac

