---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/mscan/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_CAN_MPC5XXX)	+= mscan-mpc5xxx.o
mscan-mpc5xxx-objs		:= mscan.o mpc5xxx_can.o

```
