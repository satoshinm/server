# server

Server configuration files for netcraft.beerprojects.com, hosted at:

* https://netcraft.beerprojects.com - WebSandboxMC
* http://netcraft.beerprojects.com:23333 - ThinkMap
* http://netcraft.beerprojects.com:8123 - dynmap

## Installation

Checkout this repository, then install [Glowstone server](https://www.glowstone.net):

```
sudo apt install openjdk-8-jre-headless
curl -O https://bamboo.gserv.me/browse/GSPP-SRV-520/artifact/shared/Version-Independent-Server-JAR/glowstone.jar
```

Install [Caddy web server](https://www.digitalocean.com/community/tutorials/how-to-host-a-website-with-caddy-on-ubuntu-16-04),
and configure /etc/caddy/Caddyfile as follows:

```
netcraft.beerprojects.com {
	root /var/www
	gzip
	tls snmatsutake@yahoo.co.jp
	proxy / localhost:4081 {
		websocket
	}
}
```

Plugins installed (save to `plugins/` directory):

WebSandboxMC built from https://github.com/satoshinm/WebSandboxMC

ThinkMap built from https://github.com/satoshinm/ThinkMap (includes 1.11.2 fixes)

Dynmap from https://github.com/satoshinm/dynmap/tree/glowstone (includes [Glowstone fix](https://github.com/webbukkit/dynmap/pull/2099)


