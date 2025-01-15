---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/marvell/libertas_tf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
libertas_tf-objs := main.o cmd.o

libertas_tf_usb-objs += if_usb.o

obj-$(CONFIG_LIBERTAS_THINFIRM) += libertas_tf.o
obj-$(CONFIG_LIBERTAS_THINFIRM_USB) += libertas_tf_usb.o

```
