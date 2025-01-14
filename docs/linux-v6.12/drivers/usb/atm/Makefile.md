---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/atm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for USB ATM/xDSL drivers
#
obj-$(CONFIG_USB_CXACRU)	+= cxacru.o
obj-$(CONFIG_USB_SPEEDTOUCH)	+= speedtch.o
obj-$(CONFIG_USB_UEAGLEATM)	+= ueagle-atm.o
obj-$(CONFIG_USB_ATM)		+= usbatm.o
obj-$(CONFIG_USB_XUSBATM)	+= xusbatm.o

```
