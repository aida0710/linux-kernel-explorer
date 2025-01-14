---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/cdns2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# define_trace.h needs to know how to find our header
CFLAGS_cdns2-trace.o		:= -I$(src)

obj-$(CONFIG_USB_CDNS2_UDC)		+= cdns2-udc-pci.o
cdns2-udc-pci-$(CONFIG_USB_CDNS2_UDC)	+= cdns2-pci.o cdns2-gadget.o cdns2-ep0.o
cdns2-udc-pci-$(CONFIG_TRACING)	+= cdns2-trace.o

```
