---
sidebar_position: 14
---
# time32.h

### ファイル情報

- パス: `linux-v6.12/include/vdso/time32.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __VDSO_TIME32_H
#define __VDSO_TIME32_H

typedef s32		old_time32_t;

struct old_timespec32 {
	old_time32_t	tv_sec;
	s32		tv_nsec;
};

struct old_timeval32 {
	old_time32_t	tv_sec;
	s32		tv_usec;
};

#endif /* __VDSO_TIME32_H */

```
