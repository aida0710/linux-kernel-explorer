---
sidebar_position: 11
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/sgi-ip32/Platform`

### コンテンツ

```txt
#
# SGI-IP32 (O2)
#
# Set the load address to >= 80069000 if you want to leave space for symmon,
# 0xffffffff80004000 for production kernels.  Note that the value must be aligned to
# a multiple of the kernel stack size or the handling of the current variable
# will break.
#
cflags-$(CONFIG_SGI_IP32)	+= -I$(srctree)/arch/mips/include/asm/mach-ip32
load-$(CONFIG_SGI_IP32)		+= 0xffffffff80004000

```
