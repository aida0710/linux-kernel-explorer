---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/wangxun/ngbe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright (c) 2019 - 2022 Beijing WangXun Technology Co., Ltd.
#
# Makefile for the Wangxun(R) GbE PCI Express ethernet driver
#

obj-$(CONFIG_NGBE) += ngbe.o

ngbe-objs := ngbe_main.o ngbe_hw.o ngbe_mdio.o ngbe_ethtool.o

```
