---
sidebar_position: 138
---
# xsk_xdp_common.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/xsk_xdp_common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef XSK_XDP_COMMON_H_
#define XSK_XDP_COMMON_H_

#define MAX_SOCKETS 2

struct xdp_info {
	__u64 count;
} __attribute__((aligned(32)));

#endif /* XSK_XDP_COMMON_H_ */

```
