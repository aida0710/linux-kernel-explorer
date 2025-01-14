---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/ttusb-budget/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DVB_TTUSB_BUDGET) += dvb-ttusb-budget.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends

```
