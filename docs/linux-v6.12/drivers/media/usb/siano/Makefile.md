---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/siano/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SMS_USB_DRV) += smsusb.o

ccflags-y += -I $(srctree)/drivers/media/common/siano
ccflags-y += $(extra-cflags-y) $(extra-cflags-m)


```
