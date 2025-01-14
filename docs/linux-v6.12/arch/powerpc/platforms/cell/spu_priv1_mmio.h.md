---
sidebar_position: 25
---
# spu_priv1_mmio.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/cell/spu_priv1_mmio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * spu hypervisor abstraction for direct hardware access.
 *
 *  Copyright (C) 2006 Sony Computer Entertainment Inc.
 *  Copyright 2006 Sony Corp.
 */

#ifndef SPU_PRIV1_MMIO_H
#define SPU_PRIV1_MMIO_H

struct device_node *spu_devnode(struct spu *spu);

#endif /* SPU_PRIV1_MMIO_H */

```
