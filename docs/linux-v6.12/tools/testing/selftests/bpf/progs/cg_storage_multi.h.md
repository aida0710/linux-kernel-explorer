---
sidebar_position: 166
---
# cg_storage_multi.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/cg_storage_multi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#ifndef __PROGS_CG_STORAGE_MULTI_H
#define __PROGS_CG_STORAGE_MULTI_H

struct cgroup_value {
	__u32 egress_pkts;
	__u32 ingress_pkts;
};

#endif

```
