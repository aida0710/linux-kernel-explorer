---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/pwc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
pwc-objs	+= pwc-if.o pwc-misc.o pwc-ctrl.o pwc-v4l.o pwc-uncompress.o
pwc-objs	+= pwc-dec1.o pwc-dec23.o pwc-kiara.o pwc-timon.o

obj-$(CONFIG_USB_PWC) += pwc.o

```
