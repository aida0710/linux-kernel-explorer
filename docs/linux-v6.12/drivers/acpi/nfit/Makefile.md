---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/acpi/nfit/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ACPI_NFIT) := nfit.o
nfit-y := core.o
nfit-y += intel.o
nfit-$(CONFIG_X86_MCE) += mce.o

```
