#！/bin/bash
case $1 in
	"start" )
	echo "============start_kafka==========="
	for i in hadoop102 hadoop103 hadoop104; do
		#statements
		echo "-------$i---------"
		ssh $i "/opt/module/kafka/bin/kafka-server-start.sh -daemon /opt/module/kafka/config/server.properties"
	done
		;;

	"stop" )
	echo "============stop_kafka==========="
	for i in hadoop102 hadoop103 hadoop104; do
		#statements
		echo "-------$i---------"
		ssh $i "/opt/module/kafka/bin/kafka-server-stop.sh"
	done
		;;

	* )
	echo "wrong parameters"
	
		;;
esac


#KAFKA_HOME
export KAFKA_HOME=/opt/module/kafka
export PATH=$PATH:$KAFKA_HOME/bin

