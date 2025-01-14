---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/acpi/dptf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ACPI)             += int340x_thermal.o
obj-$(CONFIG_DPTF_POWER)	+= dptf_power.o
obj-$(CONFIG_DPTF_PCH_FIVR)	+= dptf_pch_fivr.o

```
