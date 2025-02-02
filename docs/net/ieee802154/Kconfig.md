---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `net/ieee802154/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig IEEE802154
	tristate "IEEE Std 802.15.4 Low-Rate Wireless Personal Area Networks support"
	help
	  IEEE Std 802.15.4 defines a low data rate, low power and low
	  complexity short range wireless personal area networks. It was
	  designed to organise networks of sensors, switches, etc automation
	  devices. Maximum allowed data rate is 250 kb/s and typical personal
	  operating space around 10m.

	  Say Y here to compile LR-WPAN support into the kernel or say M to
	  compile it as modules.

if IEEE802154

config IEEE802154_NL802154_EXPERIMENTAL
	bool "IEEE 802.15.4 experimental netlink support"
	help
	  Adds experimental netlink support for nl802154.

config IEEE802154_SOCKET
	tristate "IEEE 802.15.4 socket interface"
	default y
	help
	  Socket interface for IEEE 802.15.4. Contains DGRAM sockets interface
	  for 802.15.4 dataframes. Also RAW socket interface to build MAC
	  header from userspace.

source "net/ieee802154/6lowpan/Kconfig"

endif

```
