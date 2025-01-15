---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/atheros/alx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ALX) += alx.o
alx-objs := main.o ethtool.o hw.o

```
