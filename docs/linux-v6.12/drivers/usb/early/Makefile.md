---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/early/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for early USB devices
#

obj-$(CONFIG_EARLY_PRINTK_DBGP) += ehci-dbgp.o
obj-$(CONFIG_EARLY_PRINTK_USB_XDBC) += xhci-dbc.o

```
