---
sidebar_position: 14
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/ccs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccs-objs			+= ccs-core.o ccs-reg-access.o \
				   ccs-quirk.o ccs-limits.o ccs-data.o
obj-$(CONFIG_VIDEO_CCS)		+= ccs.o

ccflags-y += -I $(srctree)/drivers/media/i2c

```
