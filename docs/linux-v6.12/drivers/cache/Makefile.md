---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/cache/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_AX45MP_L2_CACHE)		+= ax45mp_cache.o
obj-$(CONFIG_SIFIVE_CCACHE)		+= sifive_ccache.o
obj-$(CONFIG_STARFIVE_STARLINK_CACHE)	+= starfive_starlink_cache.o

```
