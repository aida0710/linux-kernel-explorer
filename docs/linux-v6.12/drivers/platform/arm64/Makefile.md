---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/arm64/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for linux/drivers/platform/arm64
#
# This dir should only include drivers for EC-like devices.
#

obj-$(CONFIG_EC_ACER_ASPIRE1)	+= acer-aspire1-ec.o
obj-$(CONFIG_EC_LENOVO_YOGA_C630) += lenovo-yoga-c630.o

```
