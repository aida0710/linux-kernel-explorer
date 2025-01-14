---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/ptrace/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the linux kernel.
#

CFLAGS_ptrace-view.o		+= -DUTS_MACHINE='"$(UTS_MACHINE)"'

obj-y				+= ptrace.o ptrace-view.o
obj-y				+= ptrace-fpu.o
obj-$(CONFIG_COMPAT)		+= ptrace32.o
obj-$(CONFIG_VSX)		+= ptrace-vsx.o
ifneq ($(CONFIG_VSX),y)
obj-y				+= ptrace-novsx.o
endif
obj-$(CONFIG_ALTIVEC)		+= ptrace-altivec.o
obj-$(CONFIG_SPE)		+= ptrace-spe.o
obj-$(CONFIG_PPC_TRANSACTIONAL_MEM)	+= ptrace-tm.o
obj-$(CONFIG_PPC_ADV_DEBUG_REGS)	+= ptrace-adv.o
ifneq ($(CONFIG_PPC_ADV_DEBUG_REGS),y)
obj-y				+= ptrace-noadv.o
endif

```
