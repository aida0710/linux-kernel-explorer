---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/b2c2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
b2c2-flexcop-usb-objs := flexcop-usb.o
obj-$(CONFIG_DVB_B2C2_FLEXCOP_USB) += b2c2-flexcop-usb.o

ccflags-y += -I $(srctree)/drivers/media/common/b2c2/

```
