---
sidebar_position: 56
---
# repair.h

### ファイル情報

- パス: `linux-v6.12/drivers/md/dm-vdo/repair.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright 2023 Red Hat
 */

#ifndef VDO_REPAIR_H
#define VDO_REPAIR_H

#include "types.h"

void vdo_replay_into_slab_journals(struct block_allocator *allocator, void *context);
void vdo_repair(struct vdo_completion *parent);

#endif /* VDO_REPAIR_H */

```
