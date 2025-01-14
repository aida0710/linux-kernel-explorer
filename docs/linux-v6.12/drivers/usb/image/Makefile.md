---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/image/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for USB Image drivers
#

obj-$(CONFIG_USB_MDC800)	+= mdc800.o
obj-$(CONFIG_USB_MICROTEK)	+= microtek.o

```
