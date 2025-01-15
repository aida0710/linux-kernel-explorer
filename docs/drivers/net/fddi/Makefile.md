---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/fddi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux FDDI network device drivers.
#

obj-$(CONFIG_DEFXX) += defxx.o
obj-$(CONFIG_DEFZA) += defza.o
obj-$(CONFIG_SKFP) += skfp/

```
