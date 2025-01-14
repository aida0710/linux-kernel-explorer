---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/spi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
#  Makefile for the Linux Controller Area Network SPI drivers.
#


obj-$(CONFIG_CAN_HI311X)	+= hi311x.o
obj-$(CONFIG_CAN_MCP251X)	+= mcp251x.o
obj-y				+= mcp251xfd/

```
