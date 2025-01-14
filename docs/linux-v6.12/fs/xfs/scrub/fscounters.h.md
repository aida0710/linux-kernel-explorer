---
sidebar_position: 34
---
# fscounters.h

### ファイル情報

- パス: `linux-v6.12/fs/xfs/scrub/fscounters.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (c) 2021-2024 Oracle.  All Rights Reserved.
 * Author: Darrick J. Wong <djwong@kernel.org>
 */
#ifndef __XFS_SCRUB_FSCOUNTERS_H__
#define __XFS_SCRUB_FSCOUNTERS_H__

struct xchk_fscounters {
	struct xfs_scrub	*sc;
	uint64_t		icount;
	uint64_t		ifree;
	uint64_t		fdblocks;
	uint64_t		frextents;
	uint64_t		frextents_delayed;
	unsigned long long	icount_min;
	unsigned long long	icount_max;
	bool			frozen;
};

#endif /* __XFS_SCRUB_FSCOUNTERS_H__ */

```
