---
sidebar_position: 12
---
# ofpart_linksys_ns.h

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/parsers/ofpart_linksys_ns.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __OFPART_LINKSYS_NS_H
#define __OFPART_LINKSYS_NS_H

#ifdef CONFIG_MTD_OF_PARTS_LINKSYS_NS
int linksys_ns_partitions_post_parse(struct mtd_info *mtd,
				     struct mtd_partition *parts,
				     int nr_parts);
#else
static inline int linksys_ns_partitions_post_parse(struct mtd_info *mtd,
						   struct mtd_partition *parts,
						   int nr_parts)
{
	return -EOPNOTSUPP;
}
#endif

#endif

```
