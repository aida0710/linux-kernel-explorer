---
sidebar_position: 115
---
# xdp_sample_shared.h

### ファイル情報

- パス: `linux-v6.12/samples/bpf/xdp_sample_shared.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only
#ifndef _XDP_SAMPLE_SHARED_H
#define _XDP_SAMPLE_SHARED_H

struct datarec {
	size_t processed;
	size_t dropped;
	size_t issue;
	union {
		size_t xdp_pass;
		size_t info;
	};
	size_t xdp_drop;
	size_t xdp_redirect;
} __attribute__((aligned(64)));

#endif

```
