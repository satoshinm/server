#!/bin/sh
while true
do
	java -Xms1G -Xmx1G -XX:+UseG1GC -jar glowstone.jar
done
