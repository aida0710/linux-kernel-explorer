---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/char/xillybus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Xillybus driver
#

obj-$(CONFIG_XILLYBUS_CLASS)	+= xillybus_class.o
obj-$(CONFIG_XILLYBUS)		+= xillybus_core.o
obj-$(CONFIG_XILLYBUS_PCIE)	+= xillybus_pcie.o
obj-$(CONFIG_XILLYBUS_OF)	+= xillybus_of.o
obj-$(CONFIG_XILLYUSB)		+= xillyusb.o

```
