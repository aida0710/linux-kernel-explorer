---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dca/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DCA) += dca.o
dca-objs := dca-core.o dca-sysfs.o

```
