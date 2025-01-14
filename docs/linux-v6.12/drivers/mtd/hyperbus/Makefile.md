---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/hyperbus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_MTD_HYPERBUS)	+= hyperbus-core.o
obj-$(CONFIG_HBMC_AM654)	+= hbmc-am654.o
obj-$(CONFIG_RPCIF_HYPERBUS)	+= rpc-if.o

```
