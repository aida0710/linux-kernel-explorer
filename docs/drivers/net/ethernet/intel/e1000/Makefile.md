---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/intel/e1000/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright(c) 1999 - 2006 Intel Corporation.

#
# Makefile for the Intel(R) PRO/1000 ethernet driver
#

obj-$(CONFIG_E1000) += e1000.o

e1000-y := e1000_main.o e1000_hw.o e1000_ethtool.o e1000_param.o

```
