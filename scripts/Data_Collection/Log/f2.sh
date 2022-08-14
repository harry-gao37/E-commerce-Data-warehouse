#!/bin/bash

case $1 in
"start")
        echo " --------start hadoop104 log flume-------"
        ssh hadoop104 "nohup /opt/module/flume/bin/flume-ng agent -n a1 -c /opt/module/flume/conf -f /opt/module/flume/job/kafka_to_hdfs.conf >/dev/null 2>&1 &"
;;
"stop")

        echo " --------stop hadoop104 log flume-------"
        ssh hadoop104 "ps -ef | grep kafka_to_hdfs.conf | grep -v grep |awk '{print \$2}' | xargs -n1 kill"
;;
esac

