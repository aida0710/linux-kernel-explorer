---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/mon/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for USB monitor
#

usbmon-y := mon_main.o mon_stat.o mon_text.o mon_bin.o

obj-$(CONFIG_USB_MON)	+= usbmon.o

```
