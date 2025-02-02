---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/spi/mcp251xfd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config CAN_MCP251XFD
	tristate "Microchip MCP251xFD SPI CAN controllers"
	select CAN_RX_OFFLOAD
	select REGMAP
	select WANT_DEV_COREDUMP
	help
	  Driver for the Microchip MCP251XFD SPI FD-CAN controller
	  family.

config CAN_MCP251XFD_SANITY
	depends on CAN_MCP251XFD
	bool "Additional Sanity Checks"
	help
	  This option enables additional sanity checks in the driver,
	  that compares various internal counters with the in chip
	  variants. This comes with a runtime overhead.
	  Disable if unsure.

```
