---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_NTB_AMD)	+= amd/
obj-$(CONFIG_NTB_IDT)	+= idt/
obj-$(CONFIG_NTB_INTEL)	+= intel/
obj-$(CONFIG_NTB_EPF)	+= epf/
obj-$(CONFIG_NTB_SWITCHTEC) += mscc/

```
