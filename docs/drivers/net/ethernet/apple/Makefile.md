---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/apple/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Apple network device drivers.
#

obj-$(CONFIG_MACE) += mace.o
obj-$(CONFIG_BMAC) += bmac.o
obj-$(CONFIG_MACMACE) += macmace.o

```
