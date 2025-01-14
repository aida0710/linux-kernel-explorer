---
sidebar_position: 13
---
# time.h

### ファイル情報

- パス: `linux-v6.12/include/vdso/time.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __VDSO_TIME_H
#define __VDSO_TIME_H

#include <uapi/linux/types.h>

struct timens_offset {
	s64	sec;
	u64	nsec;
};

#endif /* __VDSO_TIME_H */

```
