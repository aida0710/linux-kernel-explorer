---
sidebar_position: 129
---
# schid.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/schid.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ASM_SCHID_H
#define ASM_SCHID_H

#include <linux/string.h>
#include <uapi/asm/schid.h>

/* Helper function for sane state of pre-allocated subchannel_id. */
static inline void
init_subchannel_id(struct subchannel_id *schid)
{
	memset(schid, 0, sizeof(struct subchannel_id));
	schid->one = 1;
}

static inline int
schid_equal(struct subchannel_id *schid1, struct subchannel_id *schid2)
{
	return !memcmp(schid1, schid2, sizeof(struct subchannel_id));
}

#endif /* ASM_SCHID_H */

```
