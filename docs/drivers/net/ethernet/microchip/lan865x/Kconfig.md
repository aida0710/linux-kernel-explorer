---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/microchip/lan865x/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Microchip LAN865x Driver Support
#

if NET_VENDOR_MICROCHIP

config LAN865X
	tristate "LAN865x support"
	depends on SPI
	select OA_TC6
	help
	  Support for the Microchip LAN8650/1 Rev.B0/B1 MACPHY Ethernet chip. It
	  uses OPEN Alliance 10BASE-T1x Serial Interface specification.

	  To compile this driver as a module, choose M here. The module will be
	  called lan865x.

endif # NET_VENDOR_MICROCHIP

```
