---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/bluetooth/rfcomm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Bluetooth RFCOMM layer.
#

obj-$(CONFIG_BT_RFCOMM) += rfcomm.o

rfcomm-y			:= core.o sock.o
rfcomm-$(CONFIG_BT_RFCOMM_TTY)	+= tty.o

```
