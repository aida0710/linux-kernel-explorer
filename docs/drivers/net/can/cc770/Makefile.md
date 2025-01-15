---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/cc770/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
#  Makefile for the Bosch CC770 CAN controller drivers.
#

obj-$(CONFIG_CAN_CC770) += cc770.o
obj-$(CONFIG_CAN_CC770_ISA) += cc770_isa.o
obj-$(CONFIG_CAN_CC770_PLATFORM) += cc770_platform.o

```
