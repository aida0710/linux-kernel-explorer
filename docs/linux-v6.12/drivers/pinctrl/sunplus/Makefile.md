---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pinctrl/sunplus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Sunplus Pin control drivers.
#
obj-$(CONFIG_PINCTRL_SPPCTL) += sppinctrl.o
sppinctrl-objs := sppctl.o sppctl_sp7021.o

```
