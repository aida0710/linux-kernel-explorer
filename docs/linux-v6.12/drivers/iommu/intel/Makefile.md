---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iommu/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_DMAR_TABLE) += dmar.o
obj-$(CONFIG_INTEL_IOMMU) += iommu.o pasid.o nested.o cache.o
obj-$(CONFIG_DMAR_TABLE) += trace.o cap_audit.o
obj-$(CONFIG_DMAR_PERF) += perf.o
obj-$(CONFIG_INTEL_IOMMU_DEBUGFS) += debugfs.o
obj-$(CONFIG_INTEL_IOMMU_SVM) += svm.o
ifdef CONFIG_INTEL_IOMMU
obj-$(CONFIG_IRQ_REMAP) += irq_remapping.o
endif
obj-$(CONFIG_INTEL_IOMMU_PERF_EVENTS) += perfmon.o

```
