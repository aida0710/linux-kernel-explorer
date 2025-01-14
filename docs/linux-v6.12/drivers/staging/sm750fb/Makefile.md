---
sidebar_position: 20
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/sm750fb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_FB_SM750)	+= sm750fb.o

sm750fb-objs		:= sm750.o sm750_hw.o sm750_accel.o sm750_cursor.o \
			   ddk750_chip.o ddk750_power.o ddk750_mode.o \
			   ddk750_display.o ddk750_swi2c.o ddk750_sii164.o \
			   ddk750_dvi.o ddk750_hwi2c.o

```
