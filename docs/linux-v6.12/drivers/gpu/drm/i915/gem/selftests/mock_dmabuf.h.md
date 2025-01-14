---
sidebar_position: 17
---
# mock_dmabuf.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/selftests/mock_dmabuf.h`

### コンテンツ

```h
/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright © 2016 Intel Corporation
 */

#ifndef __MOCK_DMABUF_H__
#define __MOCK_DMABUF_H__

#include <linux/dma-buf.h>

struct mock_dmabuf {
	int npages;
	struct page *pages[];
};

static inline struct mock_dmabuf *to_mock(struct dma_buf *buf)
{
	return buf->priv;
}

#endif /* !__MOCK_DMABUF_H__ */

```
