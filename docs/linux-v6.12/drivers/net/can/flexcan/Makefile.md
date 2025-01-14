---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/flexcan/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_CAN_FLEXCAN) += flexcan.o

flexcan-objs :=
flexcan-objs += flexcan-core.o
flexcan-objs += flexcan-ethtool.o

```
