---
sidebar_position: 11
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/bdc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_USB_BDC_UDC)	+= bdc.o
bdc-y	:= bdc_core.o bdc_cmd.o bdc_ep.o bdc_udc.o

ifneq ($(CONFIG_USB_GADGET_VERBOSE),)
	bdc-y			+= bdc_dbg.o
endif

```
