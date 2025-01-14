---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iommu/amd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_AMD_IOMMU) += iommu.o init.o quirks.o io_pgtable.o io_pgtable_v2.o ppr.o pasid.o
obj-$(CONFIG_AMD_IOMMU_DEBUGFS) += debugfs.o

```
