---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/as102/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
dvb-as102-objs := as102_drv.o as102_fw.o as10x_cmd.o as10x_cmd_stream.o \
		  as102_usb_drv.o as10x_cmd_cfg.o

obj-$(CONFIG_DVB_AS102) += dvb-as102.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends

```
