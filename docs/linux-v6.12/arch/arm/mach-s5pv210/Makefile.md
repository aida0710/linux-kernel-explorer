---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-s5pv210/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Copyright (c) 2010 Samsung Electronics Co., Ltd.
# 		http://www.samsung.com/

obj-$(CONFIG_PM_SLEEP)		+= pm.o sleep.o
obj-y				+= s5pv210.o

```
