---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_NTB_INTEL) += ntb_hw_intel.o
ntb_hw_intel-y := ntb_hw_gen1.o ntb_hw_gen3.o ntb_hw_gen4.o

```
