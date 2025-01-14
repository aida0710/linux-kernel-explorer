---
sidebar_position: 10
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/sgi-ip30/Platform`

### コンテンツ

```txt
#
# SGI-IP30 (Octane/Octane2)
#
cflags-$(CONFIG_SGI_IP30)		+= -I$(srctree)/arch/mips/include/asm/mach-ip30
load-$(CONFIG_SGI_IP30)			+= 0xa800000020004000

```
