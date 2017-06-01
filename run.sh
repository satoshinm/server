#!/bin/sh
while true
do
	java -Xms1G -Xmx1G -XX:+UseG1GC -XX:MaxGCPauseMillis=30 -jar glowstone.jar
done
