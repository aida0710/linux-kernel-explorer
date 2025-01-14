---
sidebar_position: 3
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson32/Platform`

### コンテンツ

```txt
cflags-$(CONFIG_CPU_LOONGSON32)		+= -march=mips32r2 -Wa,--trap
cflags-$(CONFIG_MACH_LOONGSON32)	+= -I$(srctree)/arch/mips/include/asm/mach-loongson32
load-$(CONFIG_CPU_LOONGSON32)		+= 0xffffffff80200000

```
