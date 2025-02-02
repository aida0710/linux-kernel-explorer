---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/tundra/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Tundra network device configuration
#

config NET_VENDOR_TUNDRA
	bool "Tundra devices"
	default y
	depends on TSI108_BRIDGE
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Tundra cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_TUNDRA

config TSI108_ETH
	tristate "Tundra TSI108 gigabit Ethernet support"
	depends on TSI108_BRIDGE
	help
	  This driver supports Tundra TSI108 gigabit Ethernet ports.
	  To compile this driver as a module, choose M here: the module
	  will be called tsi108_eth.

endif # NET_VENDOR_TUNDRA

```
