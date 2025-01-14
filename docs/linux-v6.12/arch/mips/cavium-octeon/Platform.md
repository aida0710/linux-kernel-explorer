---
sidebar_position: 12
---
# Platform

### ファイル情報

- パス: `linux-v6.12/arch/mips/cavium-octeon/Platform`

### コンテンツ

```txt
#
# Cavium Octeon
#
cflags-$(CONFIG_CAVIUM_OCTEON_SOC)	+=				\
		-I$(srctree)/arch/mips/include/asm/mach-cavium-octeon
load-$(CONFIG_CAVIUM_OCTEON_SOC)	+= 0xffffffff81100000

```
