---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/aspeed-vhub/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
obj-$(CONFIG_USB_ASPEED_VHUB)	+= aspeed-vhub.o
aspeed-vhub-y	:= core.o ep0.o epn.o dev.o hub.o


```
