---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/bluetooth/cmtp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Bluetooth CMTP layer
#

obj-$(CONFIG_BT_CMTP) += cmtp.o

cmtp-objs := core.o sock.o capi.o

```
