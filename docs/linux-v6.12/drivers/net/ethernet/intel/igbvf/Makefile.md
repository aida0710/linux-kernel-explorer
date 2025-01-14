---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/intel/igbvf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright(c) 2009 - 2018 Intel Corporation.
#
# Makefile for the Intel(R) 82576 VF ethernet driver
#

obj-$(CONFIG_IGBVF) += igbvf.o

igbvf-y := vf.o mbx.o ethtool.o netdev.o

```
