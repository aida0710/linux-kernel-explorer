---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/slcan/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_CAN_SLCAN) += slcan.o

slcan-objs :=
slcan-objs += slcan-core.o
slcan-objs += slcan-ethtool.o

```
