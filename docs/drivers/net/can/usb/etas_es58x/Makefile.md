---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/usb/etas_es58x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CAN_ETAS_ES58X) += etas_es58x.o
etas_es58x-y = es58x_core.o es58x_devlink.o es581_4.o es58x_fd.o

```
