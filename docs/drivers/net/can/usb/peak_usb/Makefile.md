---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/usb/peak_usb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CAN_PEAK_USB) += peak_usb.o
peak_usb-y = pcan_usb_core.o pcan_usb.o pcan_usb_pro.o pcan_usb_fd.o

```
