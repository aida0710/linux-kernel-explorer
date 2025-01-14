---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/bluetooth/bnep/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Bluetooth BNEP layer.
#

obj-$(CONFIG_BT_BNEP) += bnep.o

bnep-objs := core.o sock.o netdev.o

```
