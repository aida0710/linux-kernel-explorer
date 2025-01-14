---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-npcm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ARCH_WPCM450)	+= wpcm450.o
obj-$(CONFIG_ARCH_NPCM7XX)	+= npcm7xx.o
obj-$(CONFIG_SMP)		+= platsmp.o headsmp.o

```
