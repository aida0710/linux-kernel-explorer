---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/cpu/mce/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y				=  core.o severity.o genpool.o

obj-$(CONFIG_X86_ANCIENT_MCE)	+= winchip.o p5.o
obj-$(CONFIG_X86_MCE_INTEL)	+= intel.o
obj-$(CONFIG_X86_MCE_AMD)	+= amd.o
obj-$(CONFIG_X86_MCE_THRESHOLD) += threshold.o

mce-inject-y			:= inject.o
obj-$(CONFIG_X86_MCE_INJECT)	+= mce-inject.o

obj-$(CONFIG_ACPI_APEI)		+= apei.o

obj-$(CONFIG_X86_MCELOG_LEGACY)	+= dev-mcelog.o

```
