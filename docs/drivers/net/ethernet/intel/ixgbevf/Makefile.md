---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/intel/ixgbevf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright(c) 1999 - 2018 Intel Corporation.
#
# Makefile for the Intel(R) 82599 VF ethernet driver
#

obj-$(CONFIG_IXGBEVF) += ixgbevf.o

ixgbevf-y := vf.o mbx.o ethtool.o ixgbevf_main.o
ixgbevf-$(CONFIG_IXGBEVF_IPSEC) += ipsec.o

```
