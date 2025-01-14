---
sidebar_position: 8
---
# ipu6-dma.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/intel/ipu6/ipu6-dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright (C) 2013--2024 Intel Corporation */

#ifndef IPU6_DMA_H
#define IPU6_DMA_H

#include <linux/dma-map-ops.h>
#include <linux/iova.h>

struct ipu6_mmu_info;

struct ipu6_dma_mapping {
	struct ipu6_mmu_info *mmu_info;
	struct iova_domain iovad;
};

extern const struct dma_map_ops ipu6_dma_ops;

#endif /* IPU6_DMA_H */

```
