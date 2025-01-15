---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `net/bluetooth/hidp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Bluetooth HIDP layer
#

obj-$(CONFIG_BT_HIDP) += hidp.o

hidp-objs := core.o sock.o

```
