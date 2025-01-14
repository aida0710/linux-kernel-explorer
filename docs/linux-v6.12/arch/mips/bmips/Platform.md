---
sidebar_position: 5
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/bmips/Platform`

### コンテンツ

```txt
#
# Broadcom Generic BMIPS kernel
#
cflags-$(CONFIG_BMIPS_GENERIC)		+=				\
		-I$(srctree)/arch/mips/include/asm/mach-bmips/
load-$(CONFIG_BMIPS_GENERIC)		:= 0xffffffff80010000

```
