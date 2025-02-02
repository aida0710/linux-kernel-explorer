---
sidebar_position: 9
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/emulex/benet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config BE2NET
	tristate "ServerEngines' 10Gbps NIC - BladeEngine"
	depends on PCI
	help
	  This driver implements the NIC functionality for ServerEngines'
	  10Gbps network adapter - BladeEngine.

config BE2NET_HWMON
	bool "HWMON support for be2net driver"
	depends on BE2NET && HWMON
	depends on !(BE2NET=y && HWMON=m)
	default y
	help
	  Say Y here if you want to expose thermal sensor data on
	  be2net network adapter.

config BE2NET_BE2
	bool "Support for BE2 chipsets"
	depends on BE2NET
	default y
	help
	  Say Y here if you want to use devices based on BE2
	  chipsets. (e.g. OneConnect OCe10xxx)

config BE2NET_BE3
	bool "Support for BE3 chipsets"
	depends on BE2NET
	default y
	help
	  Say Y here if you want to use devices based on BE3
	  chipsets. (e.g. OneConnect OCe11xxx)

config BE2NET_LANCER
	bool "Support for Lancer chipsets"
	depends on BE2NET
	default y
	help
	  Say Y here if you want to use devices based on Lancer
	  chipsets. (e.g LightPulse LPe12xxx)

config BE2NET_SKYHAWK
	bool "Support for Skyhawk chipsets"
	depends on BE2NET
	default y
	help
	  Say Y here if you want to use devices based on Skyhawk
	  chipsets. (e.g. OneConnect OCe14xxx)

comment "WARNING: be2net is useless without any enabled chip"
	depends on BE2NET_BE2=n && BE2NET_BE3=n && BE2NET_LANCER=n && \
		BE2NET_SKYHAWK=n && BE2NET

```
