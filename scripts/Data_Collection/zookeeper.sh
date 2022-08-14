#！/bin/bash
case $1 in
	"start" )
	echo "============start_zookeeper==========="
	for i in hadoop102 hadoop103 hadoop104; do
		#statements
		echo "-------$i---------"
		ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh start"
	done
		;;

	"stop" )
	echo "============stop_zookeeper==========="
	for i in hadoop102 hadoop103 hadoop104; do
		#statements
		echo "-------$i---------"
		ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh stop"
	done
		;;

	"staus" )
	echo "============status_zookeeper==========="
	for i in hadoop102 hadoop103 hadoop104; do
		#statements
		echo "-------$i---------"
		ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh status"
	done
		;;

	* )
	echo "wrong parameters"
	
		;;
esac