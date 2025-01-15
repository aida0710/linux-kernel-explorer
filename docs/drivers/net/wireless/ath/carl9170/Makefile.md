---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/ath/carl9170/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
carl9170-objs := main.o usb.o cmd.o mac.o phy.o led.o fw.o tx.o rx.o
carl9170-$(CONFIG_CARL9170_DEBUGFS) += debug.o

obj-$(CONFIG_CARL9170) += carl9170.o

```
