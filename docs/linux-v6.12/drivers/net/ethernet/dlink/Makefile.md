---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/dlink/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the D-Link network device drivers.
#

obj-$(CONFIG_DL2K) += dl2k.o
obj-$(CONFIG_SUNDANCE) += sundance.o

```
