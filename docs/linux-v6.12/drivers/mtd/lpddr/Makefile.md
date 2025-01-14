---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/lpddr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# linux/drivers/mtd/lpddr/Makefile
#

obj-$(CONFIG_MTD_QINFO_PROBE)	+= qinfo_probe.o
obj-$(CONFIG_MTD_LPDDR)	+= lpddr_cmds.o
obj-$(CONFIG_MTD_LPDDR2_NVM) += lpddr2_nvm.o

```
