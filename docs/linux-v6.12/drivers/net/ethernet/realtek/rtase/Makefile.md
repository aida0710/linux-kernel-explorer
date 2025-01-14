---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/realtek/rtase/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause
# Copyright(c) 2024 Realtek Semiconductor Corp. All rights reserved.

#
# Makefile for the Realtek PCIe driver
#

obj-$(CONFIG_RTASE) += rtase.o

rtase-objs := rtase_main.o

```
