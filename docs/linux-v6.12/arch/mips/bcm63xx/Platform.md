---
sidebar_position: 19
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/bcm63xx/Platform`

### コンテンツ

```txt
#
# Broadcom BCM63XX boards
#
cflags-$(CONFIG_BCM63XX)	+=					\
		-I$(srctree)/arch/mips/include/asm/mach-bcm63xx/
load-$(CONFIG_BCM63XX)		:= 0xffffffff80010000

```
