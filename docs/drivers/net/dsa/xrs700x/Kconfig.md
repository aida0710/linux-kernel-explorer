---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/dsa/xrs700x/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_DSA_XRS700X
	tristate
	depends on NET_DSA
	select NET_DSA_TAG_XRS700X
	select REGMAP
	help
	  This enables support for Arrow SpeedChips XRS7003/7004 gigabit
	  Ethernet switches.

config NET_DSA_XRS700X_I2C
	tristate "Arrow XRS7000X series switch in I2C mode"
	depends on NET_DSA && I2C
	select NET_DSA_XRS700X
	select REGMAP_I2C
	help
	  Enable I2C support for Arrow SpeedChips XRS7003/7004 gigabit Ethernet
	  switches.

config NET_DSA_XRS700X_MDIO
	tristate "Arrow XRS7000X series switch in MDIO mode"
	depends on NET_DSA
	select NET_DSA_XRS700X
	help
	  Enable MDIO support for Arrow SpeedChips XRS7003/7004 gigabit Ethernet
	  switches.

```
