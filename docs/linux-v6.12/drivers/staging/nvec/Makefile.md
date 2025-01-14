---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/nvec/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_SERIO_NVEC_PS2)	+= nvec_ps2.o
obj-$(CONFIG_MFD_NVEC)		+= nvec.o
obj-$(CONFIG_NVEC_POWER) 	+= nvec_power.o
obj-$(CONFIG_KEYBOARD_NVEC) 	+= nvec_kbd.o
obj-$(CONFIG_NVEC_PAZ00) 	+= nvec_paz00.o

```
