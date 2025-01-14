---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/cpu/microcode/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
microcode-y				:= core.o
obj-$(CONFIG_MICROCODE)			+= microcode.o
microcode-$(CONFIG_CPU_SUP_INTEL)	+= intel.o
microcode-$(CONFIG_CPU_SUP_AMD)		+= amd.o

```
