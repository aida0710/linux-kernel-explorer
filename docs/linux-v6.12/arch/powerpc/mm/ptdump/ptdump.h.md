---
sidebar_position: 7
---
# ptdump.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/mm/ptdump/ptdump.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/types.h>
#include <linux/seq_file.h>

struct flag_info {
	u64		mask;
	u64		val;
	const char	*set;
	const char	*clear;
	bool		is_val;
	int		shift;
};

struct pgtable_level {
	const struct flag_info *flag;
	size_t num;
	u64 mask;
};

extern struct pgtable_level pg_level[5];

void pt_dump_size(struct seq_file *m, unsigned long delta);

```
