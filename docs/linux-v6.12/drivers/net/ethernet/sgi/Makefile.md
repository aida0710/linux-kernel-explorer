---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/sgi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the SGI device drivers.
#

obj-$(CONFIG_SGI_O2MACE_ETH) += meth.o
obj-$(CONFIG_SGI_IOC3_ETH) += ioc3-eth.o

```
