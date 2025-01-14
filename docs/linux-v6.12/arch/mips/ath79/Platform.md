---
sidebar_position: 7
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/ath79/Platform`

### コンテンツ

```txt
#
# Atheros AR71xx/AR724x/AR913x
#

cflags-$(CONFIG_ATH79)		+= -I$(srctree)/arch/mips/include/asm/mach-ath79
load-$(CONFIG_ATH79)		= 0xffffffff80060000

```
