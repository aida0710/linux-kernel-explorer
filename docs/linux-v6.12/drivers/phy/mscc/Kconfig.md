---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/phy/mscc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Phy drivers for Microsemi devices
#

config PHY_OCELOT_SERDES
	tristate "SerDes PHY driver for Microsemi Ocelot"
	select GENERIC_PHY
	depends on OF
	depends on MFD_SYSCON
	help
	  Enable this for supporting SerDes muxing with Microsemi Ocelot.

```
