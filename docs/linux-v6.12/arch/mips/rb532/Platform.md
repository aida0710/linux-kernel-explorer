---
sidebar_position: 5
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/rb532/Platform`

### コンテンツ

```txt
#
# Routerboard 532
#
cflags-$(CONFIG_MIKROTIK_RB532)		+=				\
		-I$(srctree)/arch/mips/include/asm/mach-rc32434
load-$(CONFIG_MIKROTIK_RB532)		+= 0xffffffff80101000

```
