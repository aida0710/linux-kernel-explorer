---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/via/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the VIA device drivers.
#

obj-$(CONFIG_VIA_RHINE) += via-rhine.o
obj-$(CONFIG_VIA_VELOCITY) += via-velocity.o

```
