---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/amd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for drivers/platform/x86/amd
# AMD x86 Platform-Specific Drivers
#

obj-$(CONFIG_AMD_PMC)		+= pmc/
amd_hsmp-y			:= hsmp.o
obj-$(CONFIG_AMD_HSMP)		+= amd_hsmp.o
obj-$(CONFIG_AMD_PMF)		+= pmf/
obj-$(CONFIG_AMD_WBRF)		+= wbrf.o

```
