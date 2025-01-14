---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/rcar/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
#  Makefile for the Renesas R-Car CAN & CAN FD controller drivers
#

obj-$(CONFIG_CAN_RCAR)		+= rcar_can.o
obj-$(CONFIG_CAN_RCAR_CANFD)	+= rcar_canfd.o

```
