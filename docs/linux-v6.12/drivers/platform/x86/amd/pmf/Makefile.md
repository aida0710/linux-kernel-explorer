---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/amd/pmf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for linux/drivers/platform/x86/amd/pmf
# AMD Platform Management Framework
#

obj-$(CONFIG_AMD_PMF) += amd-pmf.o
amd-pmf-objs := core.o acpi.o sps.o \
		auto-mode.o cnqf.o \
		tee-if.o spc.o pmf-quirks.o

```
