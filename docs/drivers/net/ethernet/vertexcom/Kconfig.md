---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/vertexcom/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Vertexcom network device configuration
#

config NET_VENDOR_VERTEXCOM
	bool "Vertexcom devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Vertexcom cards. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_VERTEXCOM

config MSE102X
	tristate "Vertexcom MSE102x SPI"
	depends on SPI
	help
	  SPI driver for Vertexcom MSE102x SPI attached network chip.

endif # NET_VENDOR_VERTEXCOM

```
