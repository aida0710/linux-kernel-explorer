---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dax/pmem/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DEV_DAX_PMEM) += dax_pmem.o
obj-$(CONFIG_DEV_DAX_PMEM) += dax_pmem_core.o

dax_pmem-y := pmem.o
dax_pmem_core-y := core.o
dax_pmem_compat-y := compat.o

```
