---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `drivers/net/dsa/hirschmann/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config NET_DSA_HIRSCHMANN_HELLCREEK
	tristate "Hirschmann Hellcreek TSN Switch support"
	depends on HAS_IOMEM
	depends on NET_DSA
	depends on PTP_1588_CLOCK
	depends on LEDS_CLASS
	depends on NET_SCH_TAPRIO
	select NET_DSA_TAG_HELLCREEK
	help
	  This driver adds support for Hirschmann Hellcreek TSN switches.

```
