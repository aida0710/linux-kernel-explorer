---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/microchip/fdma/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Microchip FDMA API configuration
#

if NET_VENDOR_MICROCHIP

config FDMA
	bool "FDMA API" if COMPILE_TEST
	help
	  Provides the basic FDMA functionality for multiple Microchip
	  switchcores.

	  Say Y here if you want to build the FDMA API that provides a common
	  set of functions and data structures for interacting with the Frame
	  DMA engine in multiple microchip switchcores.

endif # NET_VENDOR_MICROCHIP

```
