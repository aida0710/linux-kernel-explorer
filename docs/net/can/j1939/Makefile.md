---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `net/can/j1939/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_CAN_J1939) += can-j1939.o

can-j1939-objs := \
	address-claim.o \
	bus.o \
	main.o \
	socket.o \
	transport.o

```
