---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/ras/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_RAS)	+= ras.o
obj-$(CONFIG_DEBUG_FS)	+= debugfs.o
obj-$(CONFIG_RAS_CEC)	+= cec.o

obj-$(CONFIG_RAS_FMPM)	+= amd/fmpm.o
obj-y			+= amd/atl/

```
