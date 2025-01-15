---
sidebar_position: 6
---
# octep_cp_version.h

### ファイル情報

- パス: `drivers/net/ethernet/marvell/octeon_ep/octep_cp_version.h`

### コンテンツ

```h
/* SPDX-License-Identifier: BSD-3-Clause
 * Copyright (c) 2022 Marvell.
 */
#ifndef __OCTEP_CP_VERSION_H__
#define __OCTEP_CP_VERSION_H__

#define OCTEP_CP_VERSION(a, b, c)	((((a) & 0xff) << 16) + \
					 (((b) & 0xff) << 8) + \
					  ((c) & 0xff))

#endif /* __OCTEP_CP_VERSION_H__ */

```
