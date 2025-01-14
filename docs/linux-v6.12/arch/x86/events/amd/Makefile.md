---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/events/amd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_CPU_SUP_AMD)		+= core.o lbr.o
obj-$(CONFIG_PERF_EVENTS_AMD_BRS)	+= brs.o
obj-$(CONFIG_PERF_EVENTS_AMD_POWER)	+= power.o
obj-$(CONFIG_X86_LOCAL_APIC)		+= ibs.o
obj-$(CONFIG_PERF_EVENTS_AMD_UNCORE)	+= amd-uncore.o
amd-uncore-objs				:= uncore.o
ifdef CONFIG_AMD_IOMMU
obj-$(CONFIG_CPU_SUP_AMD)		+= iommu.o
endif

```
