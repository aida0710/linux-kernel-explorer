---
sidebar_position: 10
---
# ttm_mock_manager.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ttm/tests/ttm_mock_manager.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 AND MIT */
/*
 * Copyright © 2023 Intel Corporation
 */
#ifndef TTM_MOCK_MANAGER_H
#define TTM_MOCK_MANAGER_H

#include <drm/drm_buddy.h>

struct ttm_mock_manager {
	struct ttm_resource_manager man;
	struct drm_buddy mm;
	u64 default_page_size;
	/* protects allocations of mock buffer objects */
	struct mutex lock;
};

struct ttm_mock_resource {
	struct ttm_resource base;
	struct list_head blocks;
	unsigned long flags;
};

int ttm_mock_manager_init(struct ttm_device *bdev, u32 mem_type, u32 size);
int ttm_bad_manager_init(struct ttm_device *bdev, u32 mem_type, u32 size);
int ttm_busy_manager_init(struct ttm_device *bdev, u32 mem_type, u32 size);
void ttm_mock_manager_fini(struct ttm_device *bdev, u32 mem_type);
void ttm_bad_manager_fini(struct ttm_device *bdev, u32 mem_type);

#endif // TTM_MOCK_MANAGER_H

```
