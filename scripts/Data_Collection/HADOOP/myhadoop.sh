#!/bin/bash
if [ $# -lt 1 ]
then
    echo "No Args Input..."
    exit ;
fi
case $1 in
	"start" )
	echo "========start_hadoop========="

	echo "--------start_hdfs-----------"
	ssh hadoop102 "/opt/module/hadoop-3.1.3/sbin/start-dfs.sh"

	echo "--------start_yarn-----------"
	ssh hadoop103 "/opt/module/hadoop-3.1.3/sbin/start-yarn.sh"

	echo "--------start_historyserver-----------"
	ssh hadoop102 "/opt/module/hadoop-3.1.3/bin/mapred --daemon start historyserver"
		;;
	"stop" )

	echo "========stop_hadoop========="

	echo "--------stop_historyserver-----------"
	ssh hadoop102 "/opt/module/hadoop-3.1.3/bin/mapred --daemon stop historyserver"

	echo "--------stop_yarn-----------"
	ssh hadoop103 "/opt/module/hadoop-3.1.3/sbin/stop-yarn.sh"

	echo "--------stop_hdfs-----------"
	ssh hadoop102 "/opt/module/hadoop-3.1.3/sbin/stop-dfs.sh"
		;;
	"*" )
	echo "Please input start or stop"
		;;		
esac

