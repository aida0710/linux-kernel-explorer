---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/usb/kvaser_usb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CAN_KVASER_USB) += kvaser_usb.o
kvaser_usb-y = kvaser_usb_core.o kvaser_usb_leaf.o kvaser_usb_hydra.o

```
